import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AllCatogoryPageLogic from "../../HookLogicCode/CategoryLogic/AllCatogoryPageLogic";
import { Link } from "react-router-dom";

const CategoryHeader = () => {
  // eslint-disable-next-line
  const [category, loading, pageCount, getPage] = AllCatogoryPageLogic();
 
  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            {category.data
              ? category.data.map((item, index) => {
                  return (
                    <Link
                      to={`/products/category/${item._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div key={index} className="cat-text-header">
                        {item.name}
                      </div>
                    </Link>
                  );
                })
              : null}
            <Link to="/allCatogory" style={{ textDecoration: "none" }}>
              <div className="cat-text-header">More</div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryHeader;
