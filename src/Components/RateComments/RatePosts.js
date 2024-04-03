import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import AddRateHookLogic from "../../HookLogicCode/Review/AddRateHookLogic";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";

const RatePosts = () => {
  const {id} = useParams();

  const [
    onChangeRateText,
    onChangeRateValueAVG,
    rateText,
    // eslint-disable-next-line
    rateValueAVG,
    user,
    onSubmit,
  ] = AddRateHookLogic(id);
  // console.log(user);


  var name = "";
  if (user) name = user.name;

  const settingRate = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      // console.log(`Example 2: new value is ${newValue}`);
      onChangeRateValueAVG(newValue);
    },
  };
  return (
    <div>
      <Row className="mt-3 ">
        <Col sm="12" className="me-5  d-flex">
          <div className="rate-name  d-inline ms-3 mt-2">{name}</div>
          <ReactStars {...settingRate} />
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-felx me-4 pb-2">
          <textarea
            value={rateText}
            onChange={onChangeRateText}
            className="input-form-area p-2 mt-3"
            rows="2"
            cols="20"
            placeholder="Write Your Comment Here...."
          />
          <div className=" d-flex justify-content-end al">
            <div
              onClick={onSubmit}
              className="product-cart-add px-3  py-2 text-center d-inline"
            >
              Add Comment
            </div>
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default RatePosts;
