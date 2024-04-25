import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserAddressCard from "./UserAddressCard";
import ViewAddressHook from "../../HookLogicCode/User/ViewAddressHook";

const UserAllAdress = () => {
  const [res] = ViewAddressHook();
  // console.log(res);
  return (
    <div>
      <div className="admin-content-text pb-4">Address Book</div>
      {res.data && res.data.length > 0 ? (
        res.data.map((item, index) => {
          return <UserAddressCard key={index} item={item} />;
        })
      ) : (
        <h3>No Address Now..</h3>
      )}
      {/* {Array.isArray(res.data) && res.data.length > 0 ? (
        res.data.map((item, index) => {
          return <UserAddressCard key={index} item={item} />;
        })
      ) : (
        <h3>No Address Now..</h3>
      )} */}

      <Row className="justify-content-center">
        <Col sm="5" className="d-flex justify-content-center">
          <Link to="/user/add-address" style={{ textDecoration: "none" }}>
            <button className="btn-add-address">Add a new address</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllAdress;
