import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterHookLogic from "../../HookLogicCode/Auth/RegisterHookLogic";
import { ToastContainer } from "react-toastify";

const RegisterPage = () => {
  const [
    name,
    email,
    password,
    confirmPassword,
    loading,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
    onSubmit,
  ] = RegisterHookLogic();
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center hieght-search">
        <Col sm="12" className="d-flex flex-column ">
          <div></div>
          <label className="mx-auto title-login" style={{ color: "#008ECE" }}>
            Welcome !
          </label>
          <label className="mx-auto title-login">Register a new account</label>
          <input
            value={name}
            onChange={onChangeName}
            placeholder="user name"
            type="text"
            className="user-input mt-3 text-center mx-auto"
          />
          <input
            value={email}
            onChange={onChangeEmail}
            placeholder="Email"
            type="text"
            className="user-input my-3 text-center mx-auto"
          />
          <input
            value={password}
            onChange={onChangePassword}
            placeholder="Password"
            type="password"
            className="user-input text-center mx-auto"
          />
          <input
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            placeholder="Confirm Password"
            type="password"
            className="user-input text-center mx-auto"
          />
          <button onClick={onSubmit} className="btn-login mx-auto mt-4">
            Account registration
          </button>
          <label className="mx-auto my-4" style={{ textAlign: "center" }}>
            You already have an account?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                Submit
              </span>
            </Link>
          </label>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default RegisterPage;
