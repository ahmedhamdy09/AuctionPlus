import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import laptops from "../../assets/labtop.png";
import "./CSS/Discount.css";
const DiscountSection = () => {
  return (
    <Container>
      <Row className="discount-backcolor my-3  mx-2 d-flex text-center align-items-center">
        <Col sm="6">
          <div className="discount-title">50% Discount in Laptops</div>
        </Col>
        <Col sm="6">
          <img className="dicount-img" src={laptops} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default DiscountSection;
