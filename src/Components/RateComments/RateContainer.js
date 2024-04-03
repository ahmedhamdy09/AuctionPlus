import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import rate from "../../assets/rate.png";
import RateItems from "./RateItems";
import RatePosts from "./RatePosts";
import Pagination from "../Utility/Pagination";
import ViewAllReviewHook from "../../HookLogicCode/Review/ViewAllReviewHook";
import { useParams } from "react-router-dom";
const RateContainer = ({ rateAvgerage, rateQuantity }) => {
  const { id } = useParams();
  const [allReview, onPress] = ViewAllReviewHook(id);
  return (
    <Container className="rate-container">
      <Row>
        <Col className="d-flex">
          <div className="sub-tile d-inline p-1 ">Ratings</div>
          <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2">{rateAvgerage}</div>
          <div className="rate-count d-inline p-1 pt-2">
            ({`${rateQuantity} rates`})
          </div>
        </Col>
      </Row>

      <RatePosts />
      {/* {allReview.data ? (
        allReview.data.map((review, index) => {
          return <RateItems key={index} review={review} />;
        })
      ) : (
        <h6>No Rate Now</h6>
      )} */}

      {Array.isArray(allReview.data) ? (
        allReview.data.map((review, index) => {
          return <RateItems key={index} review={review} />;
        })
      ) : (
        <h6>No Rate Now</h6>
      )}

      {allReview.paginationResult &&
      allReview.paginationResult.numberOfPages >= 2 ? (
        <Pagination
          pageCount={
            allReview.paginationResult
              ? allReview.paginationResult.numberOfPages
              : 0
          }
          onPress={onPress}
        />
      ) : null}
    </Container>
  );
};

export default RateContainer;
