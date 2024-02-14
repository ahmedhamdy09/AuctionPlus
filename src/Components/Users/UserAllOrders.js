import React from "react";
import { Row } from "react-bootstrap";
import UsersOrderItems from "./UsersOrderItems";

const UserAllOrders = () => {
  return (
    <div>
      <div className="admin-content-text pb-4">Welcome Ahmed Hamdy</div>
      <Row className="justify-content-between">
        <UsersOrderItems />
        <UsersOrderItems />
        <UsersOrderItems />
        <UsersOrderItems />
      </Row>
    </div>
  );
};

export default UserAllOrders;
