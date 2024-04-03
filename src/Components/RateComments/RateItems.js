import React from "react";
import { Col, Row, Modal, Button } from "react-bootstrap";
import rate from "../../assets/rate.png";
import deleteIcon from "../../assets/delete.png";
import editIcon from "../../assets/8666681_edit_icon.svg";
import { ToastContainer } from "react-toastify";
import DeleteRateHook from "../../HookLogicCode/Review/DeleteRateHook";
import EditYourCommentHook from "../../HookLogicCode/Review/EditYourReview";
import ReactStars from "react-stars";

const RateItems = ({ review }) => {
  const [isUser, handleDelete, handleShow, handleClose, showDelete] =
    DeleteRateHook(review);

  const [
    showEdit,
    handleCloseEdit,
    handleShowEdit,
    handleEdit,
    onChangeNewRateText,
    newRateText,
    onChangeRateValueAVG,
    newRateValue,
  ] = EditYourCommentHook(review);

  const settingRate = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: newRateValue,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newRateValue) => {
      onChangeRateValueAVG(newRateValue);
    },
  };

  return (
    <div>
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Your Comment..</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure Delete the Review?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Update Your Comment..</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactStars {...settingRate} />
          <input
            onChange={onChangeNewRateText}
            value={newRateText}
            type="text"
            className="font w-100"
            style={{ border: "none" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="mt-3">
        <Col className="d-felx me-5">
          <div className="rate-name  d-inline ms-2">{review.user.name}</div>
          <img className="" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2">{review.ratings}</div>
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-felx me-4 pb-2">
          <div className="rate-description  d-inline ms-2">{review.title}</div>
          {review._id && isUser === true ? (
            <div className="d-inline d-flex justify-content-end ms-2">
              <img
                src={deleteIcon}
                onClick={handleShow}
                width="20px"
                height="20px"
                style={{ cursor: "pointer" }}
                alt="delete"
              />
              <img
                src={editIcon}
                onClick={handleShowEdit}
                width="20px"
                height="20px"
                style={{ cursor: "pointer" }}
                alt="edit"
              />
            </div>
          ) : null}
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default RateItems;
