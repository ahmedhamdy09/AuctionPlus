import React from "react";
import "./ForgetPassCSS/Popup.css";
import imagesShop from "../../../assets/image 1.png";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const PopUPEmail = () => {
  const navigate = useNavigate();
  const goPageOptionPopOtp = () => {
    navigate("/popupotp");
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
              }}
            >
              Forgot password
            </h2>
            <p>
              Enter your E-mail to send a mail to re-assign a new password for
              your account.
            </p>
          </div>
          <label class="ForgetLabel">
            <p className="emailss">E-mail</p>
            <br />
            <input
              className="emailForget"
              type="email"
              placeholder="Enter Your E-mail"
              required
            />
          </label>
          <br />
          <button className="next" onClick={goPageOptionPopOtp}>
            Next
          </button>
        </div>
      </div>
    </Container>
  );
};

export default PopUPEmail;
