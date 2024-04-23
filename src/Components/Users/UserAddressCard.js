import React from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import deleteicon from "../../assets/delete.png";
import edit from "../../assets/8666681_edit_icon.svg";
import DeleteUserHook from "../../HookLogicCode/User/DeleteUserHook";

const UserAddressCard = ({ item }) => {
  const [show, handleClose, handleShow, handleDelete] = DeleteUserHook(
    item._id
  );
  return (
    <div className="user-address-card my-3 px-2">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Apply Delete Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure Delete the Address?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Row className="d-flex justify-content-between">
        <Col xs="6">
          <div className="p-2">{item.alias}</div>
        </Col>
        <Col xs="6" className="d-flex d-flex justify-content-end">
          <div className="d-flex p-2">
            <div className="d-flex mx-2">
              <img
                alt=""
                className="ms-1 mt-2"
                src={edit}
                height="17px"
                width="15px"
              />
              <Link to="/user/edit-address" style={{ textDecoration: "none" }}>
                <p className="item-delete-edit">Edit</p>
              </Link>
            </div>
            <div onClick={handleShow} className="d-flex ">
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
              />
              <p className="item-delete-edit">Delete</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "14px",
            }}
          >
            {item.details}
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            Phone Number:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {item.phone}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAddressCard;
