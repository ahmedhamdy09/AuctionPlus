import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./ForgetPassCSS/Popup.css";
import imagesShop from "../../../assets/image 1.png";
import { useNavigate } from "react-router-dom";
import notify from "../../../HookLogicCode/useNotifaction";
import { useDispatch, useSelector } from "react-redux";
import { verfiyOtp } from "../../../Redux//Actions/AuthAction";
const PopUpOtp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [loading, setLoading] = useState(true);
  // const handleChange = (e, index) => {
  //   if (isNaN(e.target.value)) return false;

  //   setOtp([
  //     ...otp.map((data, idx) => {
  //       return idx === index ? e.target.value : data;
  //     }),
  //   ]);

  //   if (e.target.value && e.target.nextSibling) {
  //     e.target.nextSibling.focus();
  //   }
  // };
  const handleChange = (e, index) => {
    if (isNaN(e.target.value)) return false;

    const newOtp = [...otp];
    newOtp[index] =
      e.target.value.length > 1 ? e.target.value.slice(0, 1) : e.target.value;
    setOtp(newOtp);

    if (e.target.value.length === 1 && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  const res = useSelector((state) => state.authReducer.verifyOtp);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp === "") {
      notify("please insert your code", "error");
      return;
    }
    setLoading(true);

    await dispatch(
      verfiyOtp({
        resetCode: otp,
      })
    );
    setLoading(false);
  };

  useEffect(
    () => {
      if (loading === false) {
        if (res) {
          console.log(res);
          if (res.data.status === "success") {
            notify("the code otp is succes", "success");
            setTimeout(() => {
              navigate("/popupnewpass");
            }, 1500);
          }
          if (res.data.status === "fail") {
            notify("the code otp is failure sending", "error");
          }
        }
      }
    },
    // eslint-disable-next-line
    [loading]
  );
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
              {/* {otp.map((item, index) => {
                return (
                  <input
                    key={index}
                    id="otp"
                    className="emailForget"
                    type="text"
                    value={item}
                    maxLength={1}
                    onChange={(e) => handleChange(e, index)}
                    required
                    style={{
                      backgroundColor: "#ABABAB",
                      color: "#FFFFFF",
                      fontWeight: "bold",
                    }}
                  />
                );
              })} */}
              {otp.map((item, index) => {
                return (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    className="emailForget"
                    type="text"
                    value={otp[index]}
                    maxLength={1}
                    onChange={(e) => handleChange(e, index)}
                    required
                    style={{
                      width: "50px",
                      height: "40px",
                      backgroundColor: "#ABABAB",
                      color: "#FFFFFF",
                      fontWeight: "bold",
                      fontSize: "20px",
                      textAlign: "center",
                      border: "none",
                      borderRadius: "5px",
                      outline: "none",
                      padding: "0 10px",
                    }}
                  />
                );
              })}
            </div>
            <br />
            <button onClick={handleSubmit} type="submit" className="next">
              Next
            </button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default PopUpOtp;
