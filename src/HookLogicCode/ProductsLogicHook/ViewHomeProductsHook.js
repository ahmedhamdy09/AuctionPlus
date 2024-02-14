import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/ProductsActions";

const ViewHomeProductsHook = () => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getAllProducts());
    },
    // eslint-disable-next-line
    []
  );

  const allProducts = useSelector((state) => state.allproducts.allProducts);

  let items = [];
  if (allProducts && allProducts.data) {
    items = allProducts.data.slice(0, 4);
  } else {
    items = [];
  }
  return [items];
};

export default ViewHomeProductsHook;
