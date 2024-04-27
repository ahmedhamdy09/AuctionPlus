import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const AdminAllOrdersItem = ({ orderItem }) => {
  // console.log(orderItem);
  let orderCounter = 0;

  const convertOrderId = () => {
    orderCounter++;
    return orderCounter;
  };
  return (
    <Col sm="12">
      <Link
        to={`/admin/orders/${orderItem._id}`}
        className="cart-item-body-admin my-2 px-1 d-flex"
        style={{ textDecoration: "none", cursor: "pointer" }}
      >
        <div className="w-100">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 cat-text">
                Order Number #{convertOrderId(orderItem._id)}{" "}
              </div>
              {/* <div className="d-inline pt-2 cat-text">Delete</div> */}
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-row justify-content-start">
              <div className="d-inline pt-2 cat-title">
                {orderItem.user.name || ""}...
              </div>
              <div
                className="d-inline pt-2 cat-title mx-2"
                style={{ color: "red" }}
              >
                Contact: {orderItem.user.phone || ""}
              </div>
            </Col>
          </Row>
          <Row className="d-flex justify-content-between">
            <Col xs="6" className="d-flex">
              <div>
                <div className="d-inline" style={{ color: "black" }}>
                  Delivery:
                </div>
                <div className="d-inline mx-2 stat">
                  {orderItem.isDelivered === true
                    ? "IsDelivered"
                    : "No Delivered"}
                </div>
              </div>
              <div>
                <div className="d-inline" style={{ color: "black" }}>
                  paying:
                </div>
                <div className="d-inline mx-2 stat">
                  {orderItem.isPaid === true ? "isPaid" : "No Paid"}
                </div>
              </div>
              <div>
                <div className="d-inline" style={{ color: "black" }}>
                  payment:
                </div>
                <div className="d-inline mx-2 stat">
                  {orderItem.paymentMethodType === "cash"
                    ? "cash"
                    : "credit card"}
                </div>
              </div>
            </Col>
            <Col xs="6" className="d-flex justify-content-end">
              <div>
                <div className="barnd-text">
                  {orderItem.totalOrderPrice || 0}$
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Link>
    </Col>
  );
};

export default AdminAllOrdersItem;
