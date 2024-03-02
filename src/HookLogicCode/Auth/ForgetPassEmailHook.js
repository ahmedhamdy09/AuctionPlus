import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgetEmail } from "../../Redux/Actions/AuthAction";
import notify from "../useNotifaction";

const ForgetPassEmailHook = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(true);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault() 
    if (email === "") {
      notify("please insert your email", "error");
      return;
    }
      // localStorage.setItem("user-email",email);
      setLoading(true);
      await dispatch(
        forgetEmail({
          email,
        })
      );
      setLoading(false);
      // handleShow()
    
   
  };
  const res = useSelector((state) => state.authReducer.forgetPassword);
  console.log("🚀 ~ ForgetPassEmailHook ~ res:", res)
  useEffect(
    () => {
      if (loading === false) {
        if (res) {
          console.log(res);
          if (res.data.status === "success") {
            notify("the email is sending to otp", "success");
            setTimeout(() => {
              navigate("/popupotp");
            }, 1000);
          }
          if (res.data.status === "fail") {
            notify("the email not working", "error");
          }
        }
      }
    },
    // eslint-disable-next-line
    [loading]
  );
  return [onChangeEmail, email, onSubmit,setShow,show,handleShow,handleClose];
};

export default ForgetPassEmailHook;
