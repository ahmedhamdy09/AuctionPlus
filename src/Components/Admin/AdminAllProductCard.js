import React, { useState } from "react";
import { Col, Card, Row, Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProducts } from "../../Redux/Actions/ProductsActions";
import rate from "../../assets/rate.png";
const AdminAllProductCard = ({ item }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const handleDelete = async () => {
    await dispatch(deleteProducts(item._id));
    setShow(false);
    window.location.reload();
  };
  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Apply Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure apply the products?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "380px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Row className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between">
            <div onClick={handleShow} className="d-inline item-delete-edit">
              Delete
            </div>
            <Link
              to={`/admin/editproduct/${item._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="d-inline item-delete-edit">Edit</div>{" "}
            </Link>
          </Col>
        </Row>
        <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
          <Card.Img
            style={{ height: "228px", width: "100%" }}
            src={item.imageCover}
          />
          <Card.Body>
            <Card.Title>
              <div className="card-title">{item.title}</div>
              <div className="card-title">{item.name}</div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between ratandp">
                <div className="card-rate">
                  {item.ratingsQuantity}{" "}
                  <img
                    className="card-rate"
                    src={rate}
                    alt=""
                    height="20px"
                    width="20px"
                  />
                </div>

                <div className="d-flex">
                  <div className="card-price">{item.price}$</div>
                  {/* <div className="card-currency mx-1">$</div> */}
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default AdminAllProductCard;
