import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllProductsPageNumber,
} from "../../Redux/Actions/ProductsActions";

const ViewProdcutAdminHook = () => {
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

  let items = [];
  let Paginations = [];

  const allProducts = useSelector((state) => state.allproducts.allProducts);
  try {
    if (allProducts && allProducts.data) {
      items = allProducts.data;
    } else {
      items = [];
    }

    if (allProducts && allProducts.paginationResult) {
      Paginations = allProducts.paginationResult.numberOfPages;
    } else {
      Paginations = [];
    }
  } catch (e) {}
  return [items, Paginations, onPress];
};

export default ViewProdcutAdminHook;
