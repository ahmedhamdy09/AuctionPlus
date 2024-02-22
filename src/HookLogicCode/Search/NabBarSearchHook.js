import { useEffect, useState } from "react";
import ViewSearchProducts from "../ProductsLogicHook/ViewSearchProducts";

const NabBarSearchHook = () => {
  // eslint-disable-next-line
  const [items, Paginations, onPress, getProduct] = ViewSearchProducts();
  const [searchWord, setSearchWord] = useState("");
  // when user type search word
  const onChangeSearch = (e) => {
    // search words in nav
    localStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);
    const path =window.location.pathname;
    if(path !== "/products"){
      window.location.href = "/products";
    }
  };
  useEffect(
    () => {
      setTimeout(() => {
        getProduct();
      }, 1000);
    },
    // eslint-disable-next-line
    [searchWord]
  );
  return [onChangeSearch, searchWord];
};

export default NabBarSearchHook;
