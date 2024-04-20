import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import BrandCard from "./BrandCard";

const BrandContainer = ({ data, loading }) => {
  // console.log(data);
  return (
    <Container>
      <div className="admin-content-text mt-2">All Famous Brand</div>
      <Row className="my-1 d-flex justify-content-between">
        {loading === false ? (
          data ? (
            data.slice(0, 5).map((item, index) => {
              return (
                <BrandCard
                  id={item._id}
                  key={index}
                  title={item.name}
                  img={item.image}
                />
              );
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

export default BrandContainer;
