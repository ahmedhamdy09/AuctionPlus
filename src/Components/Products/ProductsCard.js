import React from "react";
import { Card } from "react-bootstrap";
import rate from "../../assets/rate.png";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProductsCardHook from "../../HookLogicCode/WishList/ProductsCardHook";

const ProductsCard = ({ item, favProducts }) => {
  // eslint-disable-next-line
  const [removeToWishListData, addToWishListData, handleFavourite, favImg] =
    ProductsCardHook(item, favProducts);
  return (
    <>
      {/* <Col xs="6" sm="6" md="4" lg="3" className="d-flex"> */}
      <Card
        className="my-2"
        style={{
          width: "260px",
          height: "380px",
          borderRadius: "8px",
          border: "none",
          overflow: "hidden",
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
            src={favImg}
            alt=""
            onClick={handleFavourite}
            className="text-center"
            style={{
              height: "24px",
              width: "26px",
              cursor: "pointer",
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>
            <div className="card-title">{item?.name}</div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                {item?.price}
                <div className="card-currency mx-1"></div>
              </div>
              <div className="d-flex">
                <div className="card-rate mx-3">
                  {Number(item.ratingsAverage).toFixed(2) || 0}
                </div>
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
      <ToastContainer />
      {/* </Col> */}
    </>
  );
};

export default ProductsCard;
