import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartCheck = () => {
  return (
    <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
      <Col xs="12" className="d-flex  flex-column  ">
        <div className="d-flex  ">
          <input
            className="copon-input d-inline text-center "
            placeholder="Code Discount"
          />
          <button className="copon-btn d-inline ">Apply</button>
        </div>
        <div className="product-price d-inline w-100 my-3  border">3000 $</div>
        <Link
          to="/order/paymethod"
          style={{ textDecoration: "none" }}
          className="product-cart-add  d-inline "
        >
          <button className="product-cart-add w-100 px-2">
            Complete your Buy
          </button>
        </Link>
      </Col>
    </Row>
  );
};

export default CartCheck;
