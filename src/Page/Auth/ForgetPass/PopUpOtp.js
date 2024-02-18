import React from "react";
import { Container } from "react-bootstrap";
import "./ForgetPassCSS/Popup.css";
import imagesShop from "../../../assets/image 1.png";
import { useNavigate } from "react-router-dom";
const PopUpOtp = () => {
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
          <label className="ForgetLabel">
            <br />
            <input
              className="emailForget"
              type="password"
              placeholder="Enter Your OTP Password"
            />
            <br />
            <a href="/popupemail" style={{ margin: "18px" }}>
              Resend the mail again.
            </a>
          </label>
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
