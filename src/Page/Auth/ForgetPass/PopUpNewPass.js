import React from "react";
import "./ForgetPassCSS/Popup.css";
import imagesShop from "../../../assets/image 1.png";
import { Container } from "react-bootstrap";
const PopUpNewPass = () => {
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
            <p>Please, enter your new password Please and Not forget it.</p>
          </div>
          <label class="ForgetLabel">
            <p className="emailss">New Password</p>
            <br />
            <input
              className="emailForget"
              type="password"
              placeholder="New Password"
            />
          </label>
          <br />
          <label class="ForgetLabel">
            <p className="emailss">Confirm Password</p>
            <br />
            <input
              className="emailForget"
              type="password"
              placeholder="Confirm Password"
            />
          </label>
          <br />
          <button className="next">Finish</button>
        </div>
      </div>
    </Container>
  );
};

export default PopUpNewPass;
