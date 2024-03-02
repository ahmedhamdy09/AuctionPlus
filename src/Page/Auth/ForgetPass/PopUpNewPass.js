import React from "react";
import "./ForgetPassCSS/Popup.css";
import imagesShop from "../../../assets/image 1.png";
import { Container } from "react-bootstrap";
import ResetPasswordHook from "../../../HookLogicCode/Auth/ResetPasswordHook";
const PopUpNewPass = () => {
  const [
    password,
    confirmPassword,
    OnChangePassword,
    OnChangeConfirmPassword,
    onSubmit,
  ] = ResetPasswordHook();

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
                }}
              >
                Forgot password
              </h2>
              <p>Please, enter your new password Please and Not forget it.</p>
            </div>
            <label className="ForgetLabel">
              <p className="emailss">New Password</p>
              <br />
              <input
                value={password}
                onChange={OnChangePassword}
                className="emailForget"
                type="password"
                placeholder="New Password"
              />
            </label>
            <br />
            <label className="ForgetLabel">
              <p className="emailss">Confirm Password</p>
              <br />
              <input
                value={confirmPassword}
                onChange={OnChangeConfirmPassword}
                className="emailForget"
                type="password"
                placeholder="Confirm Password"
              />
            </label>
            <br />
            <button onClick={onSubmit} type="submit" className="next">
              Finish
            </button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default PopUpNewPass;
