import React from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import EditAddressHook from "../../HookLogicCode/User/EditAddressHook";
import { ToastContainer } from "react-toastify";

const UserEditAddress = () => {
  const { id } = useParams();
  const [
    handleEditAddress,
    alias,
    details,
    phone,
    onChangeAlias,
    onChangeDetails,
    onChangePhone,
  ] = EditAddressHook(id);
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-2"> Edit Address </div>
        <Col sm="8">
          <input
            value={alias}
            onChange={onChangeAlias}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Naming the address, for example (home - work)"
          />
          <textarea
            value={details}
            onChange={onChangeDetails}
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="Detailed address "
          />
          <input
            value={phone}
            onChange={onChangePhone}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Phone Number"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button
            onClick={handleEditAddress}
            className="btn-save d-inline mt-2 "
          >
            Save Edit Address
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default UserEditAddress;
