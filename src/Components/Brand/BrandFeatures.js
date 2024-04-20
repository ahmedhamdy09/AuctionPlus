import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
import BrandCard from "./BrandCard";
import BrandHomeHook from "../../HookLogicCode/BrandLogic/BrandHomeHook";
const BrandFeatures = ({ title, btntitle }) => {
  const [brand, loading] = BrandHomeHook();
  // console.log(brand);

  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText="/allbrand" />
      <Row className="my-1 d-flex justify-content-between">
        {loading === false ? (
          brand && brand.data.length >= 0 && brand.data ? (
            brand.data.slice(0, 5).map((item, index) => {
              return <BrandCard id={item._id} key={index} img={item.image} />;
            })
          ) : (
            <h2>No Brand Now</h2>
          )
        ) : (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </Row>
    </Container>
  );
};

export default BrandFeatures;
