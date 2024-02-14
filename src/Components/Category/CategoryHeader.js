import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const CategoryHeader = () => {
  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className="cat-text-header ">All Products</div>
            <div className="cat-text-header">Electronic</div>
            <div className="cat-text-header">Cloths</div>
            <div className="cat-text-header">Electronic</div>
            <div className="cat-text-header">Copons</div>
            <div className="cat-text-header">Copons</div>
            <div className="cat-text-header">Copons</div>
            <div className="cat-text-header">Copons</div>
            <div className="cat-text-header">Copons</div>
            <div className="cat-text-header">More</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryHeader;
