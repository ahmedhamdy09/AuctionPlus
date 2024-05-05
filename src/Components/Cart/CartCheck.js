import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import DeleteCartHook from "../../HookLogicCode/Cart/DeleteCartHook";
import { ToastContainer } from "react-toastify";
import ApplyCouponHook from "../../HookLogicCode/Cart/ApplyCouponHook";

const CartCheck = ({
  totalPrice,
  totalPriceAfterDiscount,
  couponnameRes,
  cartItems,
}) => {
  console.log(cartItems)
  const [handleAllDeleteCart] = DeleteCartHook();
  const [couponName, onChangeCoupon, handleSubmitCoupon, handleCheckOut] =
    ApplyCouponHook(cartItems);

  useEffect(
    () => {
      if (couponnameRes) {
        onChangeCoupon(couponnameRes);
      }
    },
    // eslint-disable-next-line
    [couponnameRes]
  );

  return (
    <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
      <Col xs="12" className="d-flex  flex-column">
        <div className="d-flex  ">
          <input
            value={couponName}
            onChange={(e) => onChangeCoupon(e.target.value)}
            className="copon-input d-inline text-center "
            placeholder="Code Discount"
          />
          <button onClick={handleSubmitCoupon} className="copon-btn d-inline ">
            Apply
          </button>
        </div>
        <div className="product-price d-inline w-100 my-3  border">
          {totalPriceAfterDiscount >= 1
            ? `${totalPrice} $ ... after discount ${totalPriceAfterDiscount}`
            : `${totalPrice} $`}
        </div>
        <button
          onClick={handleCheckOut}
          className="product-cart-add w-100 px-2"
        >
          Complete Your Buy
        </button>
        <button
          onClick={handleAllDeleteCart}
          className="product-cart-add w-100 px-2 my-2"
        >
          Delete Your Cart
        </button>
      </Col>
      <ToastContainer />
    </Row>
  );
};

export default CartCheck;
