import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserCartItems } from "../../Redux/Actions/CartAction";

const GetAllUserCartHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [itemsNum, setItemsNum] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(
    () => {
      const get = async () => {
        setLoading(true);
        await dispatch(getAllUserCartItems());
        setLoading(false);
      };
      get();
    },
    // eslint-disable-next-line
    []
  );

  const res = useSelector(
    (state) => state.addProductToCart.getAlluserCartItems
  );
  useEffect(
    () => {
      if (loading === false) {
        if (res && res.status === "success") {
          setItemsNum(res.numOfCartItems);
          setCartItems(res.data.cartItems);
          setTotalPrice(res.data.totalCartPrice);
        } else {
          setItemsNum(0);
          setCartItems([]);
          setTotalPrice(0);
        }
      }
    },
    // eslint-disable-next-line
    [loading]
  );

  return [itemsNum, cartItems, totalPrice];
};

export default GetAllUserCartHook;
