import { useEffect, useState } from "react";
import {
  updateUserProfileData,
  updateUserProfilePassword,
} from "../../Redux/Actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../HookLogicCode/useNotifaction";
import { useNavigate } from "react-router-dom";

const PersonalProfileHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let user = [];
  if (localStorage.getItem("user") !== null) {
    user = JSON.parse(localStorage.getItem("user"));
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  // const [phone, setPhone] = useState(user.addresses[0].phone);
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(true);

  const onChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    e.persist();
    setEmail(e.target.value);
  };

  const onChangePhone = (e) => {
    e.persist();
    setPhone(e.target.value);
  };

  const handleEditSubmit = async () => {
    let body;
    if (user.email === email) {
      body = {
        name: name,
        phone: phone,
      };
    } else {
      body = {
        name: name,
        email: email,
        phone: phone,
      };
    }
    setLoading(true);
    await dispatch(updateUserProfileData(body));
    setLoading(false);
    setShow(false);
    // window.location.reload(false);
  };

  const res = useSelector((state) => state.authReducer.updateProfileData);

  useEffect(
    () => {
      if (loading === false) {
        if (res && res.status === 200) {
          localStorage.setItem("user", JSON.stringify(res.data.data.user));
          setTimeout(() => {
            window.location.reload(false);
          }, 1500);
        } else {
          // notify("Failed to update profile", "warn");
          console.log("Failed");
        }
      }
    },
    // eslint-disable-next-line
    [loading]
  );

  // change userPassword
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  // const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [loadingPass, setLoadingPass] = useState(true);

  const onChangeOldPass = (event) => {
    event.persist();
    setOldPassword(event.target.value);
  };

  const onChangeNewPass = (event) => {
    event.persist();
    setNewPassword(event.target.value);
  };
  // const onChangeConfirmPass = (event) => {
  //     event.persist();
  //     setConfirmNewPassword(event.target.value)
  // }

  const changePassword = async () => {
    setLoadingPass(true);
    await dispatch(
      updateUserProfilePassword({
        password: newPassword,
      })
    );
    setLoadingPass(false);
  };

  const resPass = useSelector(
    (state) => state.authReducer.updateProfilePassword
  );
  useEffect(
    () => {
      if (loadingPass === false) {
        // console.log(resPass);
        if (resPass && resPass.status === 200) {
          notify("Password Was Change Suuccessfully", "success");
          setTimeout(() => {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            navigate("/login");
          }, 1500);
        } else {
          notify("Failed Change Password", "warn");
        }
      }
    },
    // eslint-disable-next-line
    [loadingPass]
  );

  return [
    user,
    show,
    handleClose,
    handleShow,
    handleEditSubmit,
    name,
    email,
    phone,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    changePassword,
    oldPassword,
    newPassword,
    onChangeOldPass,
    onChangeNewPass,
  ];
};

export default PersonalProfileHook;
