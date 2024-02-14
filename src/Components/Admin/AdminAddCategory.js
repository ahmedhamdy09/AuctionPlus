import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import AddCatogoryHook from "../../HookLogicCode/CategoryLogic/AddCatogoryHook";
// eslint-disable-next-line
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminAddCategory = () => {
  // logic in addCatogoryHook in folder

  // addCatogoryhookfolder

  const [
    imgs,
    writes,
    loading,
    press,
    handleSubmit,
    onImageChange,
    onChaneName,
  ] = AddCatogoryHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add New Category</div>
        <Col sm="8">
          <div className="text-form pb-2">Category Image</div>
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
            className="input-form d-block mt-3 px-3"
            placeholder="Category Name"
            onChange={onChaneName}
            value={writes}
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

export default AdminAddCategory;
