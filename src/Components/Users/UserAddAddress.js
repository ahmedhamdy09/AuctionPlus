import React from "react";
import { Row, Col } from "react-bootstrap";
import AddAddressHook from "../../HookLogicCode/User/AddAddressHook";

const UserAddAddress = () => {
  const [
    alias,
    details,
    phone,
    onChangeAlias,
    onChangeDetails,
    onChangePhone,
    onSubmit,
  ] = AddAddressHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-2">Add New Address</div>
        <Col sm="8">
          <input
          value ={alias}
          onChange={onChangeAlias}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Addres - (Home-Work)"
          />
          <textarea
          value ={details}
          onChange={onChangeDetails}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="Details Addresses"
          />
          <input
          value ={phone}
          onChange={onChangePhone}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Phone Number"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={onSubmit} className="btn-save d-inline mt-2 ">Add Address</button>
        </Col>
      </Row>
    </div>
  );
};

export default UserAddAddress;
