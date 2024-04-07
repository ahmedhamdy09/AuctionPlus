import { useEffect, useState } from "react";
import notify from "../useNotifaction";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser } from "../../Redux/Actions/AuthAction";
import { useNavigate } from "react-router-dom";
const RegisterHookLogic = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };


  const res = useSelector((state) => state.authReducer.createUser);
  console.log("🚀 ~ RegisterHookLogic ~ res:", res)
  // save data
  const onSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      notify("Please Write Your UserName", "error");
      return;
    }
    if (email === "") {
      notify("Please Write your E-mail", "error");
      return;
    }
    if (password !== confirmPassword) {
      notify("Please verify your password", "error");
      return;
    }
    setLoading(true);
    await dispatch(
      createNewUser({
        name: name,
        password: password,
        passwordConfirm: confirmPassword,
        email: email,
      })
    );
    setLoading(false);
  };

  useEffect(
    () => {
      if (loading === false) {
        if (res) {
          console.log(res);
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            notify("This email has registerd success", "success");
            setTimeout(() => {
              navigate("/login");
            }, 2000);
          }
          if (res.data.errors) {
            if (res.data.errors[0].msg === "E-mail already in user")
              notify("This email has already been registered", "error");
          }
          if (res.data.errors) {
            if (res.data.errors[0].msg === "must be at least 6 chars")
              notify("The Password must be 6 chars ", "error");
          }
        }
      }
    },
    // eslint-disable-next-line
    [loading]
  );
 
  return [
    name,
    email,
    password,
    confirmPassword,
    loading,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
    onSubmit,
  ];
};

export default RegisterHookLogic;
