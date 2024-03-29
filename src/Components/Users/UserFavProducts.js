import React from "react";
import { Row } from "react-bootstrap";
import Pagination from "../Utility/Pagination";
import ProductCard from "../Products/ProductsCard";
const UserFavProducts = () => {
  return (
    <div>
      <div className="admin-content-text pb-4">Favourite Lists</div>
      <Row className="justify-content-start">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
      <Pagination />
    </div>
  );
};

export default UserFavProducts;
