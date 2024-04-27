import React from "react";
import { Row, Col } from "react-bootstrap";
import UsersAllOrderCard from "./UsersAllOrderCard";

const UsersOrderItems = ({ orderItem }) => {
  // console.log(orderItem);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="user-order mt-2">
      <Row>
        <div className="py-2 order-title">
          Date: {formatDate(orderItem.createdAt)}
        </div>
      </Row>
      {orderItem.cartItems
        ? orderItem.cartItems.map((item, index) => {
            return <UsersAllOrderCard key={index} item={item} />;
          })
        : null}
      <Row className="d-flex justify-content-between">
        <Col xs="6" className="d-flex">
          <div>
            <div className="d-inline">Delivery:</div>
            <div className="d-inline mx-2 stat">
              {orderItem.isDelivered === true ? "IsDelivered" : "No Delivered"}
            </div>
          </div>
          <div>
            <div className="d-inline">paying off:</div>
            <div className="d-inline mx-2 stat">
              {orderItem.isPaid === true ? "isPaid" : "No Paid"}
            </div>
          </div>
          <div>
            <div className="d-inline">payment method:</div>
            <div className="d-inline mx-2 stat">
              {orderItem.paymentMethodType === "cash" ? "cash" : "credit card"}
            </div>
          </div>
        </Col>
        <Col xs="6" className="d-flex justify-content-end">
          <div>
            <div className="barnd-text">{orderItem.totalOrderPrice || 0}$</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UsersOrderItems;
