import React from "react";
import { Container, Row } from "react-bootstrap";
import AuctionsCard from "./AuctionCards";
import SubTitle from "../../Utility/SubTitle";

const AuctionProductsContainer = ({ title, btntitle, pathText, products }) => {
  return (
    <Container>
      {products ? (
        <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      ) : null}
      <Row className="my-2 d-flex justify-content-between">
        {products
          ? products.map((item, index) => (
              <AuctionsCard key={index} item={item} />
            ))
          : null}
      </Row>
    </Container>
  );
};

export default AuctionProductsContainer;
