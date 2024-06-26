import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllOrder } from "../../Redux/Actions/OrderAction";

const UserGetAllOrderHook = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(0);
  const [paginate, setPaginate] = useState([]);
  const [orderData, setOrderData] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  let userName = "";
  if (user !== null) {
    userName = user.name;
  }

  const get = async () => {
    setLoading(true);
    await dispatch(getAllOrder());
    setLoading(false);
  };

  useEffect(
    () => {
      get();
    },
    // eslint-disable-next-line
    []
  );

  // const onPress = async (page) => {
  //   setLoading(true);
  //   await dispatch(getAllOrder(page, 4));
  //   setLoading(false);
  // };
  const res = useSelector((state) => state.orderReducers.getAllOrder);
  useEffect(
    () => {
      if (loading === false) {
        if (res) setResult(res?.results);

        if (res) setPaginate(res?.paginationResult);

        if (res) setOrderData(res?.data);
        // console.log(res);
      }
    },
    // eslint-disable-next-line
    [loading]
  );
  return [userName, result, paginate, orderData];
};

export default UserGetAllOrderHook;
