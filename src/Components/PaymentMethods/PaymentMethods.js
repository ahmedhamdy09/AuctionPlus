import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import ViewAddressHook from "../../HookLogicCode/User/ViewAddressHook";
import OrderPayCash from "../../HookLogicCode/CheckOutPayment/OrderPayCash";
import { ToastContainer } from "react-toastify";
import notify from "../../HookLogicCode/useNotifaction";
import OrderPayCardHook from "../../HookLogicCode/CheckOutPayment/OrderPayCardHook";
const PaymentMethods = () => {
  const [res] = ViewAddressHook();

  // eslint-disable-next-line
  const [handleChooseAddress, addressDetails, createOrderCashClick] =
    OrderPayCash();

  const [handleCreateOrderCard] = OrderPayCardHook(addressDetails);
  const [typeMethod, setTypeMethod] = useState("");
  const changeMethod = (e) => {
    setTypeMethod(e.target.value);
    // console.log(e.target.value);
  };

  const handlePay = () => {
    if (typeMethod === "Visa") {
      handleCreateOrderCard();
    } else if (typeMethod === "Cash") {
      createOrderCashClick();
    } else {
      notify("Please Choose Method Payment", "warn");
    }
  };

  return (
    <div>
      <div className="admin-content-text pt-5">Choose payment method</div>
      <div className="user-address-card my-3 px-3">
        <Row className="d-flex justify-content-between">
          <Col xs="12" className="my-4">
            <input
              onChange={changeMethod}
              style={{ cursor: "pointer" }}
              name="group"
              id="group1"
              type="radio"
              value="Visa"
              className="mt-1"
            />
            <label className="mx-2" for="group1" style={{ display: "inline" }}>
              Payment via credit card
            </label>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col xs="12" className="d-flex">
            <input
              onChange={changeMethod}
              style={{ cursor: "pointer" }}
              name="group"
              id="group2"
              type="radio"
              value="Cash"
              className="mt-1"
            />
            <label
              className="mx-2"
              for="group2"
              style={{ display: "inline", cursor: "pointer" }}
            >
              Paiement when recieving{" "}
            </label>
          </Col>
        </Row>
      </div>
      <Row className="mt-3" style={{ margin: "4px" }}>
        <Col xs="12" className="d-flex justify-content-end">
          <select
            name="address"
            id="address"
            onChange={handleChooseAddress}
            className="select mt-3 px-2 "
          >
            <option value="0">Choose a shipping address</option>
            {res.data ? (
              res.data.map((item, index) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.alias}
                  </option>
                );
              })
            ) : (
              <option value="0">No Address Now..</option>
            )}
          </select>
        </Col>
      </Row>

      <Row>
        <Col xs="12" className="d-flex justify-content-end">
          <div className="product-price d-inline border me-2">34000 $</div>
          <div
            onClick={handlePay}
            className="product-cart-add px-3 pt-2 d-inline me-2"
          >
            {" "}
            Buy
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default PaymentMethods;
