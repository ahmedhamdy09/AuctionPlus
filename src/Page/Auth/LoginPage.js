import React from "react";
import { Col, Row, Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginHook from "../../HookLogicCode/Auth/LoginHook";
import { ToastContainer } from "react-toastify";
// import PopUPEmail from "./ForgetPass/PopUPEmail";

const LoginPage = () => {
  const [
    email,
    password,
    loading,
    onChangeEmail,
    onChangePassword,
    onSubmit,
    isPress,
  ] = LoginHook();
  // const [showF, setShowF] = useState(false);
  // const handleClose = () => setShowF(false);
  // const handleShow = () => setShowF(true);
  return (
    <>
      <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center ">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login" style={{ color: "#008ECE" }}>
              Welcome !
            </label>
            <label className="mx-auto title-login">Sign In</label>
            <input
              value={email}
              onChange={onChangeEmail}
              placeholder="Email"
              type="email"
              className="user-input my-3 text-center mx-auto"
            />
            <input
              value={password}
              onChange={onChangePassword}
              placeholder="Password"
              type="password"
              className="user-input text-center mx-auto"
            />
            <Link
              to={"/popupemail"}
              // onClick={handleShow}
              className="forgetpassauth"
              style={{
                textAlign: "center",
                textDecoration: "none",
                color: "blue",
                cursor: "pointer",
              }}
            >
              Forget Your Password
            </Link>
            <button onClick={onSubmit} className="btn-login mx-auto mt-4">
              Sign In
            </button>
            <label className="mx-auto my-4" style={{ textAlign: "center" }}>
              Don't have an account?{" "}
              <Link to="/register" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                  Register
                </span>
              </Link>
            </label>
            {isPress === true ? (
              loading === true ? (
                <Spinner animation="border" role="status">
                  {/* <span className="visually-hidden">Loading...</span> */}
                </Spinner>
              ) : null
            ) : null}
          </Col>

          {/* <label className="mx-auto my-4">
            <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                Admin login
              </span>
            </Link>

            <Link to="/user/allorders" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger mx-3">
                User login
              </span>
            </Link>
          </label> */}
        </Row>
        <ToastContainer />
      </Container>
      {/* <Modal
        show={showF}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <PopUPEmail setShowF={setShowF}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};

export default LoginPage;
