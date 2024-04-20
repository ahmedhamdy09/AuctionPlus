import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import Pagination from "../../Components/Utility/Pagination";
import { useParams } from "react-router-dom";
import ViewProductByBrandHook from "../../HookLogicCode/ProductsLogicHook/ViewProductByBrandHook";

const ProductByBrand = () => {
  const { id } = useParams();
  const [items, Paginations, onPress] = ViewProductByBrandHook(id);
  if (Paginations) var pageCount = Paginations;
  else pageCount = 0;
  return (
    <div style={{ minHeight: "670px" }}>
      <Container>
        <Row className="d-flex flex-row">
          <Col sm="12">
            <CardProductsContainer products={items} title="" btntitle="" />
          </Col>
        </Row>
        <Pagination pageCount={pageCount} onPress={onPress} />
      </Container>
    </div>
  );
};

export default ProductByBrand;
