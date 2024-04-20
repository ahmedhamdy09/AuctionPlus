import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "../Category/CategoryCard";
// import SideCardCategory from "./CategoryCardContainer/SideCardCategory";

const CategoryContainer = ({ data, loading }) => {
  const colors = ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff"];

  return (
    <Container>
      <div className="admin-content-text mt-2">All Category</div>
      {/* <SideCardCategory /> */}
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          data ? (
            data.map((item, index) => {
              return (
                <CategoryCard
                  key={index}
                  id={item._id}
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
