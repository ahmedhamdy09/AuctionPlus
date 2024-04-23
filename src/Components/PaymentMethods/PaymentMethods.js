import React from "react";
import { Row, Col } from "react-bootstrap";
import ViewAddressHook from "../../HookLogicCode/User/ViewAddressHook";
import OrderPayCash from "../../HookLogicCode/CheckOutPayment/OrderPayCash";
const PaymentMethods = () => {
  const [res] = ViewAddressHook();
 const [handleChooseAddress] = OrderPayCash();
  return (
    <div>
      <div className="admin-content-text pt-5">Choose payment method</div>
      <div className="user-address-card my-3 px-3">
        <Row className="d-flex justify-content-between">
          <Col xs="12" className="my-4">
            <input
              style={{ cursor: "pointer" }}
              name="group"
              id="group1"
              type="radio"
              value="Visa Payment"
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
              style={{ cursor: "pointer" }}
              name="group"
              id="group2"
              type="radio"
              value="Paiement when recieving"
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
          <div className="product-cart-add px-3 pt-2 d-inline me-2"> Buy</div>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentMethods;
