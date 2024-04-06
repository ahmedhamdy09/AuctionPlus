import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductsToWishLists,
  removeProductsToWishLists,
} from "../../Redux/Actions/WishListActions";
import notify from "../../HookLogicCode/useNotifaction";
import favoff from "../../assets/fav-off.png";
import favon from "../../assets/fav-on.png";
const ProductsCardHook = (item, favProducts) => {
  const dispatch = useDispatch();
  const [favImg, setFavImg] = useState(favoff);
  // some => return true or false
  let Fav = favProducts.some((ifItem) => ifItem === item._id);

  const [isFav, setIsFav] = useState(Fav);
  const [loading, setLoading] = useState(true);
  const [loadingRemove, setLoadingRemove] = useState(true);

  useEffect(
    () => {
      setIsFav(favProducts.some((ifItem) => ifItem === item._id));
    },
    // eslint-disable-next-line
    [favProducts]
  );

  const handleFavourite = async () => {
    if (isFav) {
      await removeToWishListData();
    } else {
      await addToWishListData();
    }
  };

  useEffect(
    () => {
      if (isFav === true) {
        setFavImg(favon);
      } else {
        setFavImg(favoff);
      }
    },
    // eslint-disable-next-line
    [isFav]
  );

  const resAdd = useSelector((state) => state.addToWishlistReducer.addWishlist);
  const resRemove = useSelector(
    (state) => state.addToWishlistReducer.removeWishlist
  );
  // console.log( resRemove);

  const addToWishListData = async () => {
    setIsFav(true);
    setFavImg(favon);
    setLoading(true);
    await dispatch(
      addProductsToWishLists({
        productId: item._id,
      })
    );
    setLoading(false);
  };

  const removeToWishListData = async () => {
    setIsFav(false);
    setFavImg(favoff);
    setLoadingRemove(true);
    console.log(item);
    await dispatch(removeProductsToWishLists(item._id));
    setLoadingRemove(false);
  };

  useEffect(
    () => {
      if (loading === false) {
        if (resAdd && resAdd.status === 200) {
          notify(
            "The products have been successfully added to the wish list",
            "success"
          );
        } else if (resAdd && resAdd.status === 401) {
          notify("You are not Login", "error");
        }
      }
    },
    // eslint-disable-next-line
    [loading]
  );

  useEffect(
    () => {
      if (loadingRemove === false) {
        if (resRemove && resRemove.status === "success") {
          console.log(resRemove);
          notify("The products have been Removed from the wish list", "warn");
        } else if (resRemove && resRemove.status === 401) {
          notify("The Product Not Removed", "error");
        }
      }
    },
    // eslint-disable-next-line
    [loadingRemove]
  );
  return [removeToWishListData, addToWishListData, handleFavourite, favImg];
};

export default ProductsCardHook;
