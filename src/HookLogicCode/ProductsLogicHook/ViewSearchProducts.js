import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllProductsPageNumber,
} from "../../Redux/Actions/ProductsActions";

const ViewSearchProducts = () => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getAllProducts(9));
    },
    // eslint-disable-next-line
    []
  );
  const onPress = async (page) => {
    await dispatch(getAllProductsPageNumber(page, 9));
  };

  const allProducts = useSelector((state) => state.allproducts.allProducts);

  let items = [];
  if (allProducts && allProducts.data) {
    items = allProducts.data;
  } else {
    items = [];
  }
  let Paginations = [];
  if (allProducts && allProducts.paginationResult) {
    Paginations = allProducts.paginationResult.numberOfPages;
  } else {
    Paginations = [];
  }

  return [items, Paginations, onPress];
};

export default ViewSearchProducts;
