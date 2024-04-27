import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import mobile from "../../assets/mobile.png";
const UsersAllOrderCard = ({ item }) => {
  // console.log(item);
  return (
    <div>
      <Row className="d-flex mb-2">
        <Col xs="3" md="2" className="d-flex justify-content-start">
          <Link
            to={`/products/${item?.product?._id}`}
            style={{ textDecoration: "none" }}
          >
            {item.product && item.product.imageCover && (
              <img
                width="93px"
                height="120px"
                src={item.product.imageCover}
                alt=""
              />
            )}
          </Link>
        </Col>
        <Col xs="8" md="6">
          <div className="d-inline pt-2 cat-title">
            {item.product && item.product.category ? item.product.category : ""}
          </div>
          <div
            className="color ms-2"
            style={{
              backgroundColor: item.color,
            }}
          ></div>
          {/* <div className="d-inline pt-2 cat-rate me-2" style={{ color: item.color }}>{item.color}</div>
          <div className="rate-count d-inline p-1 pt-2">(160 تقييم)</div> */}
          <div className="mt-3">
            <div className="cat-text  d-inline">Quantity</div>
            <input
              value={item.quantity}
              className="mx-2 "
              type="number"
              style={{ width: "40px", height: "25px" }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UsersAllOrderCard;
