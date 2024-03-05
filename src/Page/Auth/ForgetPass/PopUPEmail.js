import React from "react";
import "./ForgetPassCSS/Popup.css";
import imagesShop from "../../../assets/image 1.png";
import { Container } from "react-bootstrap";
import ForgetPassEmailHook from "../../../HookLogicCode/Auth/ForgetPassEmailHook";
import { ToastContainer } from "react-toastify";
const PopUPEmail = () => {
  const [
    onChangeEmail,
    email,
    onSubmit,
    
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
    </Container>
  );
};

export default PopUPEmail;

// <Modal
// show={show}
// onHide={handleClose}
// backdrop="static"
// keyboard={false}
// >
// <Modal.Header closeButton></Modal.Header>
// <Modal.Body>
//   <PopUpOtp />
// </Modal.Body>
// <Modal.Footer>
//   <Button variant="secondary" onClick={handleClose}>
//     Close
//   </Button>
// </Modal.Footer>
// </Modal>


// { setShowF }
// // eslint-disable-next-line
// setShow,
// // eslint-disable-next-line
// show,
// // eslint-disable-next-line
// handleShow,
// // eslint-disable-next-line
// handleClose,