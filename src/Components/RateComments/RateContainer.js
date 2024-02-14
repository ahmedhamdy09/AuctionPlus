import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import rate from "../../assets/rate.png";
import RateItems from "./RateItems";
import RatePosts from "./RatePosts";
import Pagination from "../Utility/Pagination";
const RateContainer = () => {
  return (
    <Container className="rate-container">
      <Row>
        <Col className="d-flex">
          <div className="sub-tile d-inline p-1 ">Ratings</div>
          <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2">4.3</div>
          <div className="rate-count d-inline p-1 pt-2">(160 Rate)</div>
        </Col>
      </Row>

      <RatePosts />
      <RateItems />
      <RateItems />
      <RateItems />
      <RateItems />
      <Pagination />
    </Container>
  );
};

export default RateContainer;
