import React from "react";
import { Col, Row } from "react-bootstrap";
import AuctionGallery from "./AuctionGallery";
import AuctionDescription from "./AuctionDescription";

const AuctionProductsDetails = () => {
  return (
    <div>
      <Row className="py-3">
        <Col lg="4">
          <AuctionGallery />
        </Col>

        <Col lg="8">
          <AuctionDescription />
        </Col>
      </Row>
    </div>
  );
};

export default AuctionProductsDetails;
