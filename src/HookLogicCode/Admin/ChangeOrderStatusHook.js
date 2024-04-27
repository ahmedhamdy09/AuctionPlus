import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateOrderToDeliver,
  updateOrderToPaid,
} from "../../Redux/Actions/OrderAction";
import notify from "../useNotifaction";

const ChangeOrderStatusHook = (id) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  const [loadingDeliver, setLoadingDeliver] = useState(true);

  const [pay, setPay] = useState(0);
  const [deliver, setDeliver] = useState(0);

  const changePayOrder = async () => {
    if (pay === "true") {
      setLoading(true);
      await dispatch(updateOrderToPaid(id));
      setLoading(false);
    } else if (pay === "0") {
      console.log("Please Insert Paid");
    }
  };

  const ChangeDeliver = async () => {
    if (deliver === "true") {
      setLoadingDeliver(true);
      await dispatch(updateOrderToDeliver(id));
      setLoadingDeliver(false);
    } else if (deliver === "0") {
      console.log("Please Insert Deliver");
    }
  };

  const resPay = useSelector((state) => state.orderReducers.updateOrderToPay);
  useEffect(
    () => {
      if (loading === false) {
        if (resPay && resPay.status === 200) {
          notify("Order Paid Successfully", "success");
          setTimeout(() => {
            window.location.reload(false);
          }, 1500);
        } else {
          notify("Order Not Paid", "error");
        }
      }
    },
    // eslint-disable-next-line
    [loading]
  );

  const resDeliver = useSelector(
    (state) => state.orderReducers.updateOrderToDeliver
  );
  useEffect(
    () => {
      if (loading === false) {
        if (resDeliver && resDeliver.status === 200) {
          notify("Order Deliver Successfully", "success");
          setTimeout(() => {
            window.location.reload(false);
          }, 1500);
        } else {
          notify("Order Not Deliver", "error");
        }
      }
    },
    // eslint-disable-next-line
    [loadingDeliver]
  );

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const onChangePaid = (e) => {
    setPay(e.target.value);
  };

  const onChangeDeliver = (e) => {
    setDeliver(e.target.value);
  };

  return [
    formatDate,
    onChangePaid,
    changePayOrder,
    onChangeDeliver,
    ChangeDeliver,
  ];
};

export default ChangeOrderStatusHook;
