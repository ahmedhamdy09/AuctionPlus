import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsSearch } from "../../Redux/Actions/ProductsActions";

const ViewSearchProducts = () => {
  let limit = 8;
  const dispatch = useDispatch();

  const getProduct = async () => {
    let word = "";
    if (localStorage.getItem("searchWord") != null)
      word = localStorage.getItem("searchWord");
    sortData();
    await dispatch(
      getAllProductsSearch(`sort=${sort}&limit=${limit}&keyword=${word}`)
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
    let word = "";
    if (localStorage.getItem("searchWord") != null)
      word = localStorage.getItem("searchWord");
    sortData();
    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&page=${page}&keyword=${word}`
      )
    );
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
