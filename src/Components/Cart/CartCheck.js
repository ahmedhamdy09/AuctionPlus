import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import DeleteCartHook from "../../HookLogicCode/Cart/DeleteCartHook";
import { ToastContainer } from "react-toastify";

const CartCheck = ({ totalPrice }) => {
  const [handleAllDeleteCart] = DeleteCartHook();
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
        <div className="product-price d-inline w-100 my-3  border">
          {totalPrice || 0} $
        </div>
        <button
          onClick={handleAllDeleteCart}
          className="product-cart-add w-100 px-2 my-2"
        >
          Delete Your Cart
        </button>
        <Link
          to="/order/paymethod"
          style={{ textDecoration: "none" }}
          className="product-cart-add  d-inline "
        >
          <button className="product-cart-add w-100 px-2">
            Complete Your Buy
          </button>
        </Link>
      </Col>
      <ToastContainer />
    </Row>
  );
};

export default CartCheck;
