import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login" style={{ color: "#008ECE" }}>
            Welcome !
          </label>
          <label className="mx-auto title-login">Sign In</label>
          <input
            placeholder="Email"
            type="text"
            className="user-input my-3 text-center mx-auto"
          />
          <input
            placeholder="Password"
            type="password"
            className="user-input text-center mx-auto"
          />
          <a
            href="/popupemail"
            alt="forget password"
            className="forgetpassauth"
            style={{ textAlign: "center" }}
          >
            Forget Your Password
          </a>
          <button className="btn-login mx-auto mt-4">Sign In</button>
          <label className="mx-auto my-4" style={{ textAlign: "center" }}>
            Don't have an account?{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                Register
              </span>
            </Link>
          </label>
        </Col>

        <label className="mx-auto my-4">
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
        </label>
      </Row>
    </Container>
  );
};

export default LoginPage;
