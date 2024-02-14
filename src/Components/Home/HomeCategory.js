import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
import CategoryCard from "../Category/CategoryCard";
import HomeCategoryLogic from "../../HookLogicCode/CategoryLogic/HomeCategoryLogic";
const HomeCategory = () => {
  // home catgory logic
  const [category, loading, colors] = HomeCategoryLogic();
  return (
    <Container>
      <SubTitle title="Category" btntitle="More" pathText="/allCatogory" />
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          category && category.data ? (
            category.data.slice(0, 5).map((item, index) => {
              return (
                <CategoryCard
                  key={index}
                  title={item.name}
                  img={item.image}
                  background={colors[index]}
                />
              );
            })
          ) : (
            <h4>No Category</h4>
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

export default HomeCategory;
