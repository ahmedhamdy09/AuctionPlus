import React from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import editition from "../../assets/8666681_edit_icon.svg";
import PersonalProfileHook from "../../HookLogicCode/User/PersonalProfileHook";
import { ToastContainer } from "react-toastify";
const UserProfile = () => {
  const [
    user,
    show,
    handleClose,
    // eslint-disable-next-line
    handleShow,
    handleEditSubmit,
    name,
    email,
    phone,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    changePassword,
    oldPassword,
    newPassword,
    onChangeOldPass,
    onChangeNewPass,
  ] = PersonalProfileHook();

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your Personal Details.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            value={name}
            onChange={onChangeName}
            type="text"
            className="input-form font d-block mt-3 px-3"
            placeholder="user name"
            style={{ margin: "2px" }}
          />
          <input
            value={email}
            onChange={onChangeEmail}
            type="text"
            className="input-form font d-block mt-3 px-3"
            placeholder="Email"
            style={{ margin: "2px" }}
          />
          <input
            value={phone}
            onChange={onChangePhone}
            type="text"
            className="input-form font d-block mt-3 px-3"
            placeholder="phone number"
            style={{ margin: "2px" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditSubmit}>
            Save Edit
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="admin-content-text">personal page</div>
      <div className="user-address-card my-3 px-2">
        <Row className="d-flex justify-content-between pt-2">
          <Col xs="6" className="d-flex">
            <div className="p-2">Name: </div>
            <div className="p-1 item-delete-edit">{user.name}</div>
          </Col>
          <Col xs="6" className="d-flex justify-content-end">
            <div onClick={handleShow} className="d-flex mx-2">
              <img
                alt=""
                className="ms-1 mt-2"
                src={editition}
                height="17px"
                width="15px"
              />
              <p className="item-delete-edit">Edit</p>
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col xs="12" className="d-flex">
            {/* <div className="p-2">Phone Number:</div> */}
            <div className="p-2">role:</div>

            <div className="p-1 item-delete-edit">
              {/* {user.addresses[0].phone} */}
              {user.role}
            </div>
          </Col>
        </Row>
        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2">E-Mail:</div>
            <div className="p-1 item-delete-edit">{user.email}</div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs="10" sm="8" md="6" className="">
            <div className="admin-content-text">Change Password</div>
            <input
              value={oldPassword}
              onChange={onChangeOldPass}
              type="password"
              className="input-form d-block mt-1 px-3"
              placeholder="insert old password"
            />
            <input
              value={newPassword}
              onChange={onChangeNewPass}
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="insert new password"
            />
          </Col>
        </Row>

        <Row>
          <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
            <button
              onClick={changePassword}
              className="btn-save d-inline mt-2 "
            >
              Save Password
            </button>
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserProfile;
