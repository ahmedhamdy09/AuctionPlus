import React from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatures from "../../Components/Brand/BrandFeatures";
import ViewHomeProductsHook from "../../HookLogicCode/ProductsLogicHook/ViewHomeProductsHook";
import AuctionProductsContainer from "../../Components/livesShow/AuctionProductDescription/AuctionProductContainer"
const HomePage = () => {
  const [items] = ViewHomeProductsHook();
  console.log(items);
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <AuctionProductsContainer
       products={items}
        title="Auction"
        btntitle="More"
        pathText="/auctionlive"
       />
      <HomeCategory />
      <CardProductsContainer
        products={items}
        title="Best Seller"
        btntitle="More"
        pathText="/products"
      />
      <DiscountSection />
      <CardProductsContainer
        products={items}
        title="Best Products"
        btntitle="More"
        pathText="/products"
      />
      <BrandFeatures title="All Famous Brand" btntitle="More" />
    </div>
  );
};

export default HomePage;
