import React from "react";
import ProductsCard from "./ProductsCard";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";

import CardProductHook from "../../HookLogicCode/WishList/CardProductHook";

const CardProductsContainer = ({ title, btntitle, pathText, products }) => {
  const [favProducts] = CardProductHook()
  return (
    <Container>
      {products ? (
        <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      ) : null}
      {/* <Row className="my-2 d-flex justify-content-between"> */}
      <div className="salamacard">
        {products
          ? products.map((item, index) => (
              <ProductsCard favProducts={favProducts} key={index} item={item} />
            ))
          : null}
          </div>
      {/* </Row> */}
    </Container>
  );
};

export default CardProductsContainer;
