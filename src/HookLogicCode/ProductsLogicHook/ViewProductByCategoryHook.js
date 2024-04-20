import { useDispatch, useSelector } from "react-redux";
import { getAllProductsByCategory } from "../../Redux/Actions/ProductsActions";
import { useEffect } from "react";

const ViewProductByCategoryHook = (catID) => {
  let limit = 8;
  const dispatch = useDispatch();

  const getProduct = async () => {
    await dispatch(getAllProductsByCategory("", limit, catID));
  };
  useEffect(
    () => {
      getProduct("");
    },
    // eslint-disable-next-line
    []
  );

  // when click paginations
  const onPress = async (page) => {
    await dispatch(getAllProductsByCategory(page, limit, catID));
  };

  const allProducts = useSelector(
    (state) => state.allproducts.getProductByCategory
  );

  let items = [];
  let Paginations = [];

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

  return [items, Paginations, onPress];
};

export default ViewProductByCategoryHook;
