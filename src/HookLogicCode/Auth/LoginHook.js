import { useEffect, useState } from "react";
import notify from "../useNotifaction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Redux/Actions/AuthAction";

const LoginHook = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const validationValuesSignIn = () => {
    if (email === "") {
      notify("please enter your email", "error");
      return;
    }
    if (password === "") {
      notify("please enter your password", "error");
      return;
    }
  };
  const res = useSelector((state) => state.authReducer.loginUser);

  const onSubmit = async () => {
    setIsPress(true);
    validationValuesSignIn();
    setLoading(true);
    await dispatch(
      loginUser({
        email: email,
        password: password,
      })
    );
    setLoading(false);
    setIsPress(false);
  };

  useEffect(
    () => {
      if (loading === false) {
        if (res && res.data) {
          console.log(res.data);
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.data));
            notify("Login Success", "success");
            setTimeout(() => {
              window.location.href = "/";
            }, 1500);
          } else {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
          }
          if (res.status) {
            if (res.data.message === "Incorrect email or password") {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              notify("Login Failed", "error");
            }
          }
          setLoading(true);
        }
      }
    },
    // eslint-disable-next-line
    [loading]
  );
  return [
    email,
    password,
    loading,
    onChangeEmail,
    onChangePassword,
    onSubmit,
    isPress,
  ];
};

export default LoginHook;
