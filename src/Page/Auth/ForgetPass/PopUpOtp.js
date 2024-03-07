import React from "react";
import { Container } from "react-bootstrap";
import "./ForgetPassCSS/Popup.css";
import imagesShop from "../../../assets/image 1.png";
import VerifyOTP from "../../../HookLogicCode/Auth/VerfyPassOTP";

const PopUpOtp = () => {
  const [onChangeCode, code, onSubmit] = VerifyOTP();
  return (
    <Container>
      <form>
        <div className="forgetPass">
          <div className="imgs">
            <img className="shopsImg" src={imagesShop} alt="shop" />
          </div>
          <div className="entern">
            <div className="descripeEntern">
              <h2
                style={{
                  textAlign: "left",
                  fontWeight: "bold",
                  margin: "0 auto",
                }}
              >
                Forgot password
              </h2>
              <p>
                Type the OTP you received on your e-mail to continue resetting
                your password.
              </p>
            </div>
            <div className="otp-reset">
             
                <label className="ForgetLabel">
              <p className="emailss">OTP Verfiy</p>
              <br />
              <input
                value={code}
                onChange={onChangeCode}
                className="otpdesign"
                type="password"
              />{" "}
            </label>
            </div>
            <br />
            <button onClick={onSubmit} className="next">
              Next
            </button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default PopUpOtp;

// const dispatch = useDispatch();
// const navigate = useNavigate();
// const [show, setShow] = useState(false);
// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);
// const [otp, setOtp] = useState(new Array(6).fill(""));
// console.log("🚀 ~ PopUpOtp ~ otp:", otp);
// const [loading, setLoading] = useState(true);

// const handleChange = (e, index) => {
//   if (isNaN(e.target.value)) return false;

//   const newOtp = [...otp];
//   newOtp[index] =
//     e.target.value.length > 1 ? e.target.value.slice(0, 1) : e.target.value;
//   setOtp(newOtp);

//   if (e.target.value.length === 1 && e.target.nextSibling) {
//     e.target.nextSibling.focus();
//   }
// };

// const res = useSelector((state) => state.authReducer.verifyOtp);

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   if (otp === "") {
//     notify("please insert your code", "error");
//     return;
//   }
//   setLoading(true);

//   await dispatch(
//     verfiyOtp({
//       resetCode: otp,
//     })
//   );
//   handleShow();
//   setLoading(false);
// };

// useEffect(
//   () => {
//     if (loading === false) {
//       if (res) {
//         console.log(res);
//         if (res.data.status === "success") {
//           notify("the code otp is succes", "success");
//           setTimeout(() => {
//             navigate("/popupnewpass");
//           }, 1500);
//         }
//         if (res.data.status === "fail") {
//           notify("the code otp is failure sending", "error");
//         }
//       }
//     }
//   },
//   // eslint-disable-next-line
//   [loading]
// );
