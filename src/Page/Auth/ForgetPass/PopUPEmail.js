import React, { useState } from "react";
import "./ForgetPassCSS/Popup.css";
import imagesShop from "../../../assets/image 1.png";
import { Button, Container, Modal } from "react-bootstrap";
import ForgetPassEmailHook from "../../../HookLogicCode/Auth/ForgetPassEmailHook";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PopUpOtp from "./PopUpOtp";
const PopUPEmail = ({ setShowF }) => {
  const [
    onChangeEmail,
    email,
    onSubmit,
    setShow,
    show,
    handleShow,
    handleClose,
  ] = ForgetPassEmailHook();

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
              <p>
                Enter your E-mail to send a mail to re-assign a new password for
                your account.
              </p>
            </div>
            <label className="ForgetLabel">
              <p className="emailss">E-mail</p>
              <br />
              <input
                value={email}
                onChange={onChangeEmail}
                className="emailForget"
                type="email"
                placeholder="Enter Your E-mail"
                // required
              />
            </label>
            <br />
            <button onClick={onSubmit} className="next">
              Next
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <PopUpOtp />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default PopUPEmail;
