import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "../Category/CategoryCard";

const CategoryContainer = ({ data, loading }) => {
  const colors = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CDFDF",
    "#FF6262",
    "#0034FF",
    "#FFD3E8",
  ];
  return (
    <Container>
      <div className="admin-content-text mt-2">All Category</div>
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          data ? (
            data.map((item, index) => {
              return (
                <CategoryCard
                  key={index}
                  title={item.name}
                  img={item.image}
                  background={colors[Math.floor(Math.random() * 5) + 1]}
                />
              );
            })
          ) : (
            <h2>NO CATEGORY</h2>
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

export default CategoryContainer;
