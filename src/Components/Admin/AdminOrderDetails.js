import React from "react";
import { Row, Col } from "react-bootstrap";
import CartItem from "../Cart/CartItem";
import UsersOrderItems from "../Users/UsersOrderItems";
import { useParams } from "react-router-dom";
import GetOrderDetailsHook from "../../HookLogicCode/Admin/GetOrderDetailsHook";
import ChangeOrderStatusHook from "../../HookLogicCode/Admin/ChangeOrderStatusHook";
import { ToastContainer } from "react-toastify";
const AdminOrderDetails = () => {
  const { id } = useParams();
  // eslint-disable-next-line
  const [orderData, cartItems] = GetOrderDetailsHook(id);

  const [formatDate, onChangePaid, changePayOrder, onChangeDeliver,ChangeDeliver] = ChangeOrderStatusHook(id);
  return (
    <div>
      <div className="admin-content-text">
        Order Details Date Done on = {formatDate(orderData.createdAt)}
      </div>
      <CartItem />
      <UsersOrderItems orderItem={orderData} />

      <Row className="justify-content-center mt-4 user-data">
        <Col xs="12" className=" d-flex">
          <div className="admin-content-text py-2">تفاصيل العميل</div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            Name:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {orderData.user && orderData.user.name ? orderData.user.name : ""}
          </div>
        </Col>

        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            Email:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {orderData.user && orderData.user.email ? orderData.user.email : ""}
          </div>
        </Col>
        <div className=" d-inline px-4 border text-center pt-2">
          Toatal = {orderData.totalOrderPrice}
        </div>
        <div className="d-flex mt-2 justify-content-center">
          <div>
            <select
              name="payment"
              id="paid"
              onChange={onChangePaid}
              className="select input-form-area mt-1  text-center px-2 w-50"
            >
              <option value="0">Payment status</option>
              <option value="true">The payment was done</option>
              <option value="false">Payment has not been done</option>
            </select>
            <button
              onClick={changePayOrder}
              className="btn-a px-3 d-inline mx-2 "
            >
              Save
            </button>
          </div>
          <div>
            <select
              name="deliver"
              id="deliver"
              onChange={onChangeDeliver}
              className="select input-form-area mt-1  text-center px-2 w-50"
            >
              <option value="0">Order status</option>
              <option value="true">The order was deliver</option>
              <option value="false">order has not been deliver</option>
            </select>
            <button onClick={ChangeDeliver} className="btn-a px-3 d-inline mx-2 ">Save</button>
          </div>
        </div>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminOrderDetails;
