import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import { Container } from "react-bootstrap";
import RateContainer from "../../Components/RateComments/RateContainer";
import ViewOneProductsDetailsHook from "../../HookLogicCode/ProductsLogicHook/ViewOneProductsDetailsHook";
import { useParams } from "react-router-dom";
import AuctionProductsDetails from "../../Components/livesShow/AuctionProductDescription/AuctionProductDetails";
import AuctionProductsContainer from "../../Components/livesShow/AuctionProductDescription/AuctionProductContainer";
import SearchCountResult from "../../Components/Utility/SearchCountResult";
import ViewSearchProducts from "../../HookLogicCode/ProductsLogicHook/ViewSearchProducts";
import Pagination from "../../Components/Utility/Pagination";

const AuctionProductPage = () => {
  const { id } = useParams();
  // eslint-disable-next-line
  const [item, images, cat, brand, prod] = ViewOneProductsDetailsHook(id);
  // eslint-disable-next-line
  const [items, Paginations, onPress, getProduct, results] =
    ViewSearchProducts();
  if (Paginations) var pageCount = Paginations;
  else pageCount = 0;
  // let pageCount = Paginations || 0;

  if (prod) var itemss = prod.slice(0, 4);
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <SearchCountResult
        onClick={getProduct}
      />
      <Container>
        <AuctionProductsDetails />
        <RateContainer />
        <AuctionProductsContainer
          products={itemss}
          title="Auction you may like"
        />
        <Pagination pageCount={pageCount} onPress={onPress} />
      </Container>
    </div>
  );
};

export default AuctionProductPage;
