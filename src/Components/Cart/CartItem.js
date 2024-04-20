import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import deleteicon from "../../assets/delete.png";
import DeleteCartHook from "../../HookLogicCode/Cart/DeleteCartHook";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/ProductsActions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  // const [products, setProducts] = useState([]);
  const allProducts = useSelector((state) => state.allproducts.allProducts);
  useEffect(
    () => {
      dispatch(getAllProducts());
    },
    // eslint-disable-next-line
    []
  );
  // const product = products.find(ite => ite.id === item.product);
  const [OneP, setOneP] = useState(null);
  // console.log("🚀 ~ CartItem ~ OneP:", OneP);
  useEffect(() => {
    const set = new Set();
    //eslint-disable-next-line
    allProducts?.data.map((d) => {
      set.add(d);
    });
    const Cat = Array.from(set);
    setOneP(Cat);
  }, [allProducts]);

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
    <>
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
      {OneP && OneP.length
        ? OneP.map((it) =>
            item.product === it.id ? (
              <Col xs="12" className="cart-item-body my-2 d-flex px-2">
                <img
                  width="160px"
                  height="190px"
                  src={it.imageCover}
                  alt={""}
                />
                <div className="w-100">
                  <Row className="justify-content-between">
                    <Col
                      sm="12"
                      className=" d-flex flex-row justify-content-between"
                    >
                      <div className="d-inline pt-2 cat-text">
                        {/* {products.data.category.name || ""} */}
                      </div>
                      <div
                        onClick={handleShow}
                        className="d-flex pt-2 "
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          style={{ objectFit: "cover", width: "33%" }}
                          src={deleteicon}
                          alt=""
                          width="20px"
                          height="24px"
                        />
                        <div className="cat-text d-inline me-2">Delete</div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="justify-content-center mt-2">
                    <Col
                      sm="12"
                      className=" d-flex flex-row justify-content-start"
                    >
                      <div className="d-inline pt-2 cat-title">
                        {/* {products.name || ""} */}
                      </div>
                      <div className="d-inline pt-2 cat-rate me-2">
                        {/* {item.product.ratingsAverage || 0} */}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="12" className="mt-1">
                      <div className="cat-text d-inline">
                        Category : {it.category?.name}
                      </div>
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
                    <Col
                      sm="12"
                      className=" d-flex flex-row justify-content-between"
                    >
                      <div className="d-inline pt-2 d-flex">
                        <div className="cat-text  d-inline">Quantity</div>
                        <input
                          value={itemCount}
                          onChange={onChangeCountQuantity}
                          className="mx-2 text-center"
                          type="number"
                          style={{ width: "60px", height: "40px" }}
                        />
                        <button
                          onClick={handleUpdateCart}
                          className="btn btn-dark"
                        >
                          Apply
                        </button>
                      </div>
                      <div className="d-inline pt-2 barnd-text">
                        {item.price || 0} $
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            ) : null
          )
        : null}
    </>
  );
};

export default CartItem;
