import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import { Container } from "react-bootstrap";
import ProductDetails from "../../Components/Products/ProductDetails";
import RateContainer from "../../Components/RateComments/RateContainer";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import ViewOneProductsDetailsHook from "../../HookLogicCode/ProductsLogicHook/ViewOneProductsDetailsHook";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  // eslint-disable-next-line
  const [item, images, cat, brand, prod] = ViewOneProductsDetailsHook(id);

  if (prod) var items = prod.slice(0, 4);
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RateContainer />
        <CardProductsContainer products={items} title="Products you may like" />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
