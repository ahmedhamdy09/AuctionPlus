// eslint-disable-next-line
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Actions/CategoryAction";
import { useState } from "react";
import notify from "../../HookLogicCode/useNotifaction";
import { createSubCategory } from "../../Redux/Actions/SubCategoryAction";

const AddSubCategoryHook = () => {
  // fetch all catogry
  const dispatch = useDispatch();

  useEffect(() => {
    if (!navigator.onLine) {
      notify("Please Check your internet", "warn");
      return;
    }
    dispatch(getAllCategory());
  }, [dispatch]);

  const [id, setId] = useState("0");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const category = useSelector((state) => state.allCategory.category);
  
  //get sub category state from redux
  // const subcategory = useSelector((state) => state.subCategory.createSubCategroy);
  const subcategory = useSelector((state) => state.subCategory.subcategory);

  //on change dropdown menu
  const handleChange = (e) => {
    console.log(e.target.value);
    setId(e.target.value);
  };

  //to save name
  const onChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };

  // on save data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!navigator.onLine) {
      notify("Please Check your internet", "warn");
      return;
    }
    if (id === "0") {
      notify("Please Choose Category", "warn");
      return;
    }
    if (name === "") {
      notify("Please insert category", "warn");
      return;
    }

    setLoading(true);
    //dispatch
    await dispatch(
      createSubCategory({
        name: name,
        category: id,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setName("");
      setId("0");
      if (subcategory) {
        console.log(subcategory);
        if (subcategory.status === 201) {
          notify("Added successfully", "success");
        } else if (
          subcategory === "Error Error: Request Failed With Status Code 400"
        ) {
          notify(
            "This name subcategory is duplicate, please change it",
            "warn"
          );
        } else {
          notify("There is a problem with the addition process", "warn");
        }
        setLoading(true);
      }
    }
    // eslint-disable-next-line
  }, [loading]);
  return [
    id,
    name,
    loading,
    category,
    subcategory,
    handleChange,
    handleSubmit,
    onChangeName,
  ];
};

export default AddSubCategoryHook;
