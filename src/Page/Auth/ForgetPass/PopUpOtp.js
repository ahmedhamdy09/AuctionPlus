import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./ForgetPassCSS/Popup.css";
import imagesShop from "../../../assets/image 1.png";
import { useNavigate } from "react-router-dom";
const PopUpOtp = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const handleChange = (e, index) => {
    if (isNaN(e.target.value)) return false;

    setOtp([
      ...otp.map((data, idx) => {
        return idx === index ? e.target.value : data;
      }),
    ]);

    if (e.target.value && e.target.nextSibling) {
      //عشان يروح علي الخانة اللي بعدها علي طول
      e.target.nextSibling.focus();
    }
  };

  const navigate = useNavigate();
  const goPageOptionPopNewPass = () => {
    navigate("/popupnewpass");
  };
  return (
    <Container>
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
            {otp.map((item, index) => {
              return (
                <input
                  key={index}
                  id="otp"
                  className="emailForget"
                  type="text"
                  value={item}
                  maxLength={1}
                  onChange={(e) => handleChange(e, index)}
                />
              );
            })}
            {/* <label className="ForgetLabel">
              <br />
              <input
                id="otp"
                className="emailForget"
                type="password"
                placeholder="Enter Your OTP Password"
                required
              />
              <br />
              <a href="/popupemail" style={{ margin: "18px" }}>
                Resend the mail again.
              </a>
            </label> */}
          </div>
          <br />
          <button className="next" onClick={goPageOptionPopNewPass}>
            Next
          </button>
        </div>
      </div>
    </Container>
  );
};

export default PopUpOtp;
