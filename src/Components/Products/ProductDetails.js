import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductsGallery from "./ProductsGallery";
import ProductDescription from "./ProductDescription";

const ProductDetails = () => {
  return (
    <div>
      <Row className="py-3">
        <Col lg="4">
          <ProductsGallery />
        </Col>

        <Col lg="8">
          <ProductDescription />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
