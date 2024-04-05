import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsWishLists } from "../../Redux/Actions/WishListActions";

const CardProductHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [favProducts, setFavProducts] = useState([]);

  const res = useSelector((state) => state.addToWishlistReducer.userWishlist);

  useEffect(
    () => {
      const get = async () => {
        setLoading(true);
        await dispatch(getProductsWishLists());
        setLoading(false);
      };

      get();
    },
    // eslint-disable-next-line
    []
  );

  useEffect(
    () => {
      if (loading === false) {
        // if (res&&res.data.length >= 1) {
        //   // console.log(res.data);
        //   setFavProducts(res.data.map((item) => item._id));
        // }
        if (Array.isArray(res.data)) {
          setFavProducts(res.data.map((item) => item._id));
        }
        else setFavProducts([]);
      }
    },
    // eslint-disable-next-line
    [loading]
  );
  return [favProducts];
};

export default CardProductHook;
