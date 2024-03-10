import React from "react";
import { Card, Col } from "react-bootstrap";
import favoff from "../../assets/fav-off.png";
import rate from "../../assets/rate.png";
import { Link } from "react-router-dom";
// import { ImgUrl } from "../../Api/baseURL";

const ProductsCard = ({ item }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "380px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 16px 25px rgba(0,0,0,0.25)",
        }}
      >
        <Link to={`/products/${item?._id}`} style={{ textDecoration: "none" }}>
          <Card.Img
            style={{ height: "228px", width: "100%", objectFit: "cover" }}
            src={item?.imageCover}
          />
        </Link>

        <div className="d-flex justify-content-end mx-2">
          <img
            src={favoff}
            alt=""
            className="text-center"
            style={{
              height: "24px",
              width: "26px",
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>
            <div className="card-title">{item?.title}</div>
            <div className="card-title">{item?.name}</div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <div className="card-price">{item?.price}$</div>
                <div className="card-currency mx-1"></div>
              </div>
              <div className="d-flex">
                <div className="card-rate mx-2">{item?.ratingsQuantity}</div>
                <img
                  className="card-rate"
                  src={rate}
                  alt=""
                  height="20px"
                  width="20px"
                />
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductsCard;
