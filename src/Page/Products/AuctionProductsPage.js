import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import { Container } from "react-bootstrap";
import RateContainer from "../../Components/RateComments/RateContainer";
import ViewOneProductsDetailsHook from "../../HookLogicCode/ProductsLogicHook/ViewOneProductsDetailsHook";
import { useParams } from "react-router-dom";
import AuctionProductsDetails from "../../Components/livesShow/AuctionProductDescription/AuctionProductDetails";
import AuctionProductsContainer from "../../Components/livesShow/AuctionProductDescription/AuctionProductContainer";

const AuctionProductPage = () => {
   const { id } = useParams();
  // eslint-disable-next-line
  const [item, images, cat, brand, prod] = ViewOneProductsDetailsHook(id);

  if (prod) var items = prod.slice(0, 4);
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <AuctionProductsDetails />
        <RateContainer />
        <AuctionProductsContainer products={items} title="Auction you may like" />
      </Container>
    </div>
  );
};

export default AuctionProductPage;

