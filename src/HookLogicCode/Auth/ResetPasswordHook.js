import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "../useNotifaction";
import { resetPassword } from "../../Redux/Actions/AuthAction";

const ResetPasswordHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setComfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const OnChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const OnChangeConfirmPassword = (e) => {
    setComfirmPassword(e.target.value);
  };
  const onSubmit = async () => {
    if (password === "") {
      notify("Please insert Your Password", "error");
      return;
    }
    if (password !== confirmPassword) {
      notify("Password does not match", "error");
      return;
    }

    setLoading(true);
    await dispatch(
      resetPassword({
        email: localStorage.getItem("user-email"),
        newPassword: password,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.authReducer.resetPassword);

  useEffect(
    () => {
      if (loading === false) {
        if (res) {
          console.log(res);
          if (res.data.status === "Success") {
            notify("Password Change Success", "success");
            setTimeout(() => {
              navigate("/login");
            }, 1500);
          }
          if (res.data.status === "fail") {
            notify("Please request a new code", "error");
          }
        }
      }
    },
    // eslint-disable-next-line
    [loading]
  );

  return [
    password,
    confirmPassword,
    OnChangePassword,
    OnChangeConfirmPassword,
    onSubmit,
  ];
};

export default ResetPasswordHook;
