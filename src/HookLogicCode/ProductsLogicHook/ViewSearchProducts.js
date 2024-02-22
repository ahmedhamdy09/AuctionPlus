import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsSearch } from "../../Redux/Actions/ProductsActions";

const ViewSearchProducts = () => {
  let limit = 8;
  const dispatch = useDispatch();

  const getProduct = async () => {
    getStorage();
    sortData();
    let priceFromString = "";
    if (priceFrom === "" || priceFrom <= 0) {
      priceFromString = "";
    } else {
      priceFromString = `&price[gte]=${priceFrom}`;
    }
    let priceToString = "";
    if (priceTo === "" || priceTo <= 0) {
      priceToString = "";
    } else {
      priceToString = `&price[lte]=${priceTo}`;
    }
    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&keyword=${word}&${queryCategory}&${queryBrand}${priceFromString}${priceToString}`
      )
    );
  };
  useEffect(
    () => {
      getProduct("");
    },
    // eslint-disable-next-line
    []
  );

  const allProducts = useSelector((state) => state.allproducts.allProducts);

  let items = [];
  let Paginations = [];
  let results = 0;

  try {
    if (allProducts && allProducts.data) {
      items = allProducts.data;
    } else {
      items = [];
    }
  } catch (e) {}
  try {
    if (allProducts && allProducts.paginationResult) {
      Paginations = allProducts.paginationResult.numberOfPages;
    } else {
      Paginations = [];
    }
  } catch (e) {}
  try {
    if (allProducts.results) {
      results = allProducts.results;
    } else {
      results = 0;
    }
  } catch (e) {}

  // when click paginations
  const onPress = async (page) => {
    getStorage();
    sortData();
    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCategory}&${queryBrand}${priceFromString}${priceToString}`
      )
    );
  };

  let word = "";
  let queryCategory = "";
  let queryBrand = "";
  let priceFrom = "0";
  let priceTo = "0";
  let priceFromString = "";
  let priceToString = "";
  const getStorage = () => {
    if (localStorage.getItem("searchWord") != null)
      word = localStorage.getItem("searchWord");

    if (localStorage.getItem("categoryCheckBox") != null)
      queryCategory = localStorage.getItem("categoryCheckBox");

    if (localStorage.getItem("brandCheckBox") != null)
      queryBrand = localStorage.getItem("brandCheckBox");

    if (localStorage.getItem("priceFrom") != null)
      priceFrom = localStorage.getItem("priceFrom");

    if (localStorage.getItem("priceTo") != null)
      priceTo = localStorage.getItem("priceTo");

    if (priceFrom === "" || priceFrom <= 0) {
      priceFromString = "";
    } else {
      priceFromString = `&price[gte]=${priceFrom}`;
    }

    if (priceTo === "" || priceTo <= 0) {
      priceToString = "";
    } else {
      priceToString = `&price[lte]=${priceTo}`;
    }
  };

  let sortType = "",
    sort;
  // wheen user choose sort type
  const sortData = () => {
    if (localStorage.getItem("sortType") != null) {
      sortType = localStorage.getItem("sortType");
    } else {
      sortType = "";
    }

    if (sortType === "Price from lowest to highest") {
      sort = "+price";
    } else if (sortType === "Price from highest to lowest") {
      sort = "-price";
    } else if (sortType === "Best Seller") {
      sort = "-sold";
    } else if (sortType === "Highest rated") {
      sort = "-ratingsQuantity";
    } else if (sortType === "") {
      sort = "";
    }
  };

  return [items, Paginations, onPress, getProduct, results];
};

export default ViewSearchProducts;
