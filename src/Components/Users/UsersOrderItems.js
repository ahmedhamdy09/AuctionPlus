import React from "react";
import { Row, Col } from "react-bootstrap";
import UsersAllOrderCard from "./UsersAllOrderCard";

const UsersOrderItems = () => {
  return (
    <div className="user-order mt-2">
      <Row>
        <div className="py-2 order-title">Dial number: #234556</div>
      </Row>
      <UsersAllOrderCard />
      <Row className="d-flex justify-content-between">
        <Col xs="6" className="">
          <div>
            <div className="d-inline">الحالة</div>
            <div className="d-inline mx-2 stat">
              The request is being executed
            </div>
          </div>
        </Col>
        <Col xs="6" className="d-flex justify-content-end">
          <div>
            <div className="barnd-text">4000 $</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UsersOrderItems;
