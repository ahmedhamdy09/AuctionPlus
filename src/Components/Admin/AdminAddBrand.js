import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
// import avatar from "../../assets/avatar.png";
import AddBrandPageLogic from "../../HookLogicCode/BrandLogic/AddBrandPageLogic";
import { ToastContainer } from "react-toastify";
const AdminAddBrand = () => {
  const [
    imgs,
    writes,
    loading,
    press,
    handleSubmit,
    onImageChange,
    onChaneName,
  ] = AddBrandPageLogic();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add New Brand</div>
        <Col sm="8">
          <div className="text-form pb-2">Brand Image</div>
          {/* <img src={avatar} alt="" height="100px" width="120px" /> */}
          <div>
            <label for="upload-photo">
              <img
                src={imgs}
                alt=""
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              onChange={onImageChange}
              id="upload-photo"
            />
          </div>
          <input
            type="text"
            value={writes}
            className="input-form d-block mt-3 px-3"
            placeholder="Brand Name"
            onChange={onChaneName}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
            Save modifications
          </button>
        </Col>
      </Row>
      {press ? (
        loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <h4>Is Done.</h4>
        )
      ) : null}
      <ToastContainer />
    </div>
  );
};

export default AdminAddBrand;
