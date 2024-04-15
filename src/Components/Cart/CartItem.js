import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import mobile from "../../assets/mobile.png";
import deleteicon from "../../assets/delete.png";
import axios from "axios";
import DeleteCartHook from "../../HookLogicCode/Cart/DeleteCartHook";

const CartItem = ({ item }) => {
  // eslint-disable-next-line
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://graduation-api-qq1p.onrender.com/api/v1/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const [
    // eslint-disable-next-line
    handleAllDeleteCart,
    show,
    handleClose,
    handleShow,
    handleDeleteOneItem,
    itemCount,
    onChangeCountQuantity,
    handleUpdateCart,
  ] = DeleteCartHook(item);

  return (
    <Col xs="12" className="cart-item-body my-2 d-flex px-2">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Apply Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure Delete this Cart?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDeleteOneItem}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <img
        width="160px"
        height="197px"
        // src={products.imageCover || mobile}
        src={mobile}
        alt=""
      />
      <div className="w-100">
        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 cat-text">
              {/* {products.category.name || ""} */}
            </div>
            <div
              onClick={handleShow}
              className="d-flex pt-2 "
              style={{ cursor: "pointer" }}
            >
              <img src={deleteicon} alt="" width="20px" height="24px" />
              <div className="cat-text d-inline me-2">Delete</div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2">
          <Col sm="12" className=" d-flex flex-row justify-content-start">
            <div className="d-inline pt-2 cat-title">
              {/* {products.name || ""} */}
            </div>
            <div className="d-inline pt-2 cat-rate me-2">
              {item.product.ratingsAverage || 0}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1">
            <div className="cat-text d-inline">Brand :</div>
            <div className="barnd-text d-inline mx-1">
              {" "}
              {/* {item.product.brand || ""} */}
              {/* {products.brand || ""} */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1 d-flex">
            {item.color === "" ? null : (
              <div
                className="color ms-2 border"
                style={{ backgroundColor: `${item.color}` }}
              ></div>
            )}
          </Col>
        </Row>

        <Row className="justify-content-between">
          <Col sm="12" className=" d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 d-flex">
              <div className="cat-text  d-inline">Quantity</div>
              <input
                value={itemCount}
                onChange={onChangeCountQuantity}
                className="mx-2 text-center"
                type="number"
                style={{ width: "60px", height: "40px" }}
              />
              <button onClick={handleUpdateCart} className="btn btn-dark">Apply</button>
            </div>
            <div className="d-inline pt-2 barnd-text">{item.price || 0} $</div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default CartItem;
