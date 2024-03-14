import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../Redux/Actions/ProductsActions";
import { getOneCategory } from "../../Redux/Actions/CategoryAction";
import { getOneBrand } from "../../Redux/Actions/BrandAction";
import { getProductLike } from "../../Redux/Actions/ProductsActions";

import spinners from "../../assets/icons8-spinner.gif";

const ViewOneProductsDetailsHook = (prodID) => {
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(getOneProduct(prodID));
    },
    // eslint-disable-next-line
    [prodID]
  );

  const oneProducts = useSelector((state) => state.allproducts.oneProduct);
  const oneCategory = useSelector((state) => state.allCategory.oneCategory);
  const oneBrand = useSelector((state) => state.allBrand.oneBrand);
  const productsLikeSame = useSelector(
    (state) => state.allproducts.productLike
  );

  // Check if oneProducts.data is available before accessing its properties
  let item = [];
  if (oneProducts) {
    // item = oneProducts.data;
    item = oneProducts;
  } else {
    item = [];
  }
  console.log(oneProducts);
  // or
  // const item = oneProducts && oneProducts.data ? oneProducts.data : {};

  useEffect(
    () => {
      if (item.category) dispatch(getOneCategory(item.category));
      if (item.brand) dispatch(getOneBrand(item.brand));
      // same products
      if (item.category) dispatch(getProductLike(item.category)); // prouducts like same
    },

    // eslint-disable-next-line
    [item]
  );
  //+++++++++++++++++++++++++++++++++++++++++
  let cat = [];
  if (oneCategory && oneCategory.data) {
    cat = oneCategory.data;
  } else {
    cat = [];
  }
  //++++++++++++++++++++++++++++++++++++
  let brand = [];
  if (oneBrand && oneBrand.data) brand = oneBrand.data;
  else brand = [];

  //++++++++++++++++++++++++++++++
  let prod = [];
  if (productsLikeSame) {
    prod = productsLikeSame.data;
  } else {
    prod = [];
  }
  // to view images gallery
  let images = [];
  if (item.images)
    images = item.images.map((img) => {
      return {
        original: img,
      };
    });
  else {
    images = [
      {
        original: `${spinners}`,
      },
    ];
  }

  return [item, images, cat, brand, prod];
};

export default ViewOneProductsDetailsHook;
