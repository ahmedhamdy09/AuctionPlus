import React from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ViewOneProductsDetailsHook from "../../HookLogicCode/ProductsLogicHook/ViewOneProductsDetailsHook";
import AddToCart from "../../HookLogicCode/Cart/AddToCart";
import { ToastContainer } from "react-toastify";

const ProductDescription = () => {
  const { id } = useParams();
  // eslint-disable-next-line
  const [item, images, cat, brand] = ViewOneProductsDetailsHook(id);

  const [colorClick, indexColor, addToCartHandle] = AddToCart(id, item);
  return (
    <div>
      <Row className="mt-2">
        <div className="cat-text">{item.category?.name}</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            {item.name}
            <div className="cat-rate d-inline mx-3">{item.ratingsAverage}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">Brand :</div>
          <div className="barnd-text d-inline mx-1">{brand.name}</div>
          <div className="cat-text d-block">Quantity :{item?.quantity}</div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {item.colors
            ? item.colors.map((color, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => colorClick(index, color)}
                    className="color ms-2"
                    style={{
                      backgroundColor: color,
                      border: indexColor === index ? "2px solid black" : "none",
                    }}
                  ></div>
                );
              })
            : null}
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">Description :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">{item.description}</div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          {item?.discountedPrice >= 1 ? (
            <div className="product-price d-inline px-3 py-3 border">
              {" "}
              <span style={{ textDecoration: "line-through" }}>
                {item?.price}
              </span>{" "}
              {item?.discountedPrice}
            </div>
          ) : (
            <div className="product-price d-inline px-3 py-3 border">
              {item?.price}
            </div>
          )}

          <div
            onClick={addToCartHandle}
            className="product-cart-add px-3 py-3 d-inline mx-3"
          >
            add Carts
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default ProductDescription;
