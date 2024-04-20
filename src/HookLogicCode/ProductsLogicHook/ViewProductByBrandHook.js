import { useDispatch, useSelector } from "react-redux";
import { getAllProductsByBrand } from "../../Redux/Actions/ProductsActions";
import { useEffect } from "react";

const ViewProductByBrandHook = (brandID) => {
  let limit = 8;
  const dispatch = useDispatch();

  const getProduct = async () => {
    await dispatch(getAllProductsByBrand("", limit, brandID));
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
    await dispatch(getAllProductsByBrand(page, limit, brandID));
  };

  const allBrands = useSelector(
    (state) => state.allproducts.getProductByBrand
  );

  let items = [];
  let Paginations = [];

  try {
    if (allBrands && allBrands.data) {
      items = allBrands.data;
    } else {
      items = [];
    }
  } catch (e) {}
  try {
    if (allBrands && allBrands.paginationResult) {
      Paginations = allBrands.paginationResult.numberOfPages;
    } else {
      Paginations = [];
    }
  } catch (e) {}

  return [items, Paginations, onPress];
};

export default ViewProductByBrandHook;
