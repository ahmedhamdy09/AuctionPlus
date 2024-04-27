import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneOrder } from "../../Redux/Actions/OrderAction";

const GetOrderDetailsHook = (id) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  const [orderData, setOrderData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const get = async () => {
    setLoading(true);
    await dispatch(getOneOrder(id));
    setLoading(false);
  };

  useEffect(
    () => {
      get();
    },
    // eslint-disable-next-line
    []
  );

  const resOneOrder = useSelector((state) => state.orderReducers.getOneOrder);
  useEffect(
    () => {
      if (loading === false) {
        if (resOneOrder.data) setOrderData(resOneOrder.data);
        if (resOneOrder.data.cartItems)
          setCartItems(resOneOrder.data.cartItems);
        // console.log(resOneOrder);
      }
    },
    // eslint-disable-next-line
    [loading]
  );
  return [orderData,cartItems];
};

export default GetOrderDetailsHook;
