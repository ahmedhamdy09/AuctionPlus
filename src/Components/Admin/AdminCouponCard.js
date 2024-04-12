import React from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import deleteicon from "../../assets/delete.png";
import editItem from "../../assets/8666681_edit_icon.svg";
import CouponCardHook from "../../HookLogicCode/Coupons/CouponCardHook";
import { Link } from "react-router-dom";

const AdminCouponCard = ({ coupon }) => {
  const [formatDate, dateString, show, handleClose, handleShow, handleDelete] =
    CouponCardHook(coupon);
  return (
    <div className="user-address-card my-3 px-2">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Apply Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure Delete the Coupons?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Row className="d-flex justify-content-between  ">
        <Col xs="6">
          <div
            className="p-2"
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Coupon Name: {coupon.name}
          </div>
        </Col>
        <Col xs="6" className="d-flex d-flex justify-content-end">
          <div className="d-flex p-2">
            <div className="d-flex mx-2">
              <Link
                to={`/admin/editcoupons/${coupon._id}`}
                style={{ textDecoration: "none" }}
              >
                <img
                  alt=""
                  className="ms-1 mt-2"
                  src={editItem}
                  height="17px"
                  width="15px"
                />
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
              fontWeight: "bold",
            }}
          >
            Date Expired: {formatDate(dateString)}
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
              fontWeight: "bold",
            }}
          >
            Discount percentage:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
              fontWeight: "bold",
            }}
            className="mx-2"
          >
            {coupon.discount} %
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AdminCouponCard;
