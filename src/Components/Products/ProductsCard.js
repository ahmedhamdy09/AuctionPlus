import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import favoff from "../../assets/fav-off.png";
import favon from "../../assets/icons8-heart.gif";
import rate from "../../assets/rate.png";
import { Link } from "react-router-dom";
import { addProductsToWishLists } from "../../Redux/Actions/WishListActions";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../HookLogicCode/useNotifaction";
import { ToastContainer } from "react-toastify";
// import { ImgUrl } from "../../Api/baseURL";

const ProductsCard = ({ item }) => {
  const dispatch = useDispatch();
  const [favImg, setFavImg] = useState(favoff);
  const [isFav, setIsFav] = useState(false);

  const handleFavourite = () => {
    setIsFav(!isFav);
  };

  const res = useSelector((state) => state.addToWishlistReducer.addWishlist);
  // console.log(res);
  useEffect(() => {
    if (isFav === false) {
      setFavImg(favoff);
    } else {
      addToWishListData();
    }
  },
  // eslint-disable-next-line 
  [isFav]);

  const addToWishListData = async () => {
    await dispatch(
      addProductsToWishLists({
        productId: item._id,
      })
    );
    if(res && res.status === 200) {
      notify("The products have been successfully added to the wish list", "Success")
    }
    setFavImg(favon);
  };

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
            {/* <div className="card-title">{item?.title}</div> */}
            <div className="card-title">{item?.name}</div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <div className="card-priceOriginal">{item?.price}$</div>
                <div className="card-price">{item?.discountedPrice}$</div>
                <div className="card-currency mx-1"></div>
              </div>
              <div className="d-flex">
                <div className="card-rate mx-2">
                  {item?.ratingsAverage || 0}
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
    </Col>
  );
};

export default ProductsCard;
