// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import avatar from "../../assets/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { createBrand } from "../../Redux/Actions/BrandAction";
import notify from "../../HookLogicCode/useNotifaction";
// eslint-disable-next-line
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBrandPageLogic = () => {
  const dispatch = useDispatch();
  const [imgs, setImgs] = useState(avatar);
  // user write categry save it
  const [writes, setWrites] = useState("");
  console.log(writes);
  //عاوز الفايل والمسار بتاعه
  const [selectedFile, setSelectedFile] = useState(null);
  console.log(selectedFile);

  // loading state
  const [loading, setLoading] = useState(true);

  const [press, setPress] = useState(false);

  // to change name state
  const onChaneName = (e) => {
    e.persist();
    setWrites(e.target.value);
  };

  //when image change save it
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImgs(URL.createObjectURL(e.target.files[0]));
      //file location selected files
      setSelectedFile(e.target.files[0]);
    }
  };

  // const res = useSelector((state) => state.allBrand.createBrand);
  const res = useSelector((state) => state.allBrand.brand);

  // console.log(res);

  //save data in database
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (writes === "" || selectedFile === null) {
      // console.log("please continue");
      notify("Please Continue your Details", "warn");
      return;
    }

    const formData = new FormData();
    // use append only in image
    formData.append("name", writes);
    formData.append("image", selectedFile);

    setLoading(true);
    setPress(true);
    console.log("Loading Is Done..");
    await dispatch(createBrand(formData));

    setLoading(false);
  };

  // loading convert true to false
  // eslint-disable-next-lineclear
  // useEffect(() => {
  //   if (loading === false) {
  //     setImgs(avatar);
  //     setWrites("");
  //     setSelectedFile(null);
  //     console.log("Is Done.");
  //     setLoading(true);
  //     setTimeout(() => setPress(false), 2000);
  //     //eslint-disable-next-line
  //     if (res.status === 201) {
  //       notify("Add Brand Successfully", "success");
  //     } else {
  //       notify("Is Problem Here,Please solve it", "error");
  //     }
  //   }
  //   // eslint-disable-next-line
  // }, [loading]);
  useEffect(() => {
    if (loading === false && res && res.status) {
      setImgs(avatar);
      setWrites("");
      setSelectedFile(null);
      console.log("Is Done.");
      setLoading(true);
      setTimeout(() => setPress(false), 2000);
      if (res.status === 201) {
        notify("Add Brand Successfully", "success");
      } else {
        notify("Is Problem Here,Please solve it", "error");
      }
    }
  }, [loading, res]);

  return [
    imgs,
    writes,
    loading,
    press,
    handleSubmit,
    onImageChange,
    onChaneName,
  ];
};

export default AddBrandPageLogic;
