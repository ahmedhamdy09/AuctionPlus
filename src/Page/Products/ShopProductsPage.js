import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCountResult from "../../Components/Utility/SearchCountResult";
import { Col, Container, Row } from "react-bootstrap";
import SideBarFilter from "../../Components/Utility/SideBarFilter";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import Pagination from "../../Components/Utility/Pagination";
import ViewSearchProducts from "../../HookLogicCode/ProductsLogicHook/ViewSearchProducts";
const ShopProductsPage = () => {
  const [items, Paginations, onPress,  getProduct, results] = ViewSearchProducts();
  if (Paginations) var pageCount = Paginations;
   else pageCount = 0;
 // let pageCount = Paginations || 0;

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult onClick={getProduct} title={`There are ${results} Search Result`} />
        <Row className="d-flex flex-row">
          <Col sm="2" xs="2" md="2" className="d-flex">
            <SideBarFilter />
          </Col>
          <Col sm="10" xs="10" md="10">
            <CardProductsContainer products={items} title="" btntitle="" />
          </Col>
        </Row>
        <Pagination pageCount={pageCount} onPress={onPress} />
      </Container>
    </div>
  );
};

export default ShopProductsPage;
