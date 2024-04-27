import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import GetAllUserCartHook from "../Cart/GetAllUserCartHook";
import notify from "../../HookLogicCode/useNotifaction";
import { createOrderByCard } from "../../Redux/Actions/CheckOutAction";
const OrderPayCardHook = (addressDetails) => {
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  const [, , , , , cartID] = GetAllUserCartHook();

  // when user click pay
  const handleCreateOrderCard = async () => {
    if (cartID === "0") {
      notify("please add prodcut to cart first..", "warn");
      return;
    }
    if (addressDetails.length <= 0) {
      notify("please choose address first..", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      createOrderByCard(cartID, {
        shippingAddress: {
          details: addressDetails.alias,
          phone: addressDetails.phone,
          city: "",
          postalCode: "",
        },
      })
    );
    setLoading(false);
  };

  // create a new card order response
  const resCard = useSelector(
    (state) => state.cashOrderReducers.createOrderByCard
  );
  
  useEffect(
    () => {
      if (loading === false) {
        if (resCard && resCard.status === "success") {
          notify("Create Credit Card Order Successfully", "success");
        //   console.log(resCard.session.url);
          if (resCard.session.url) {
            window.open(resCard.session.url);
          }
        } else {
          notify("Failed To Card Order ", "error");
        }
      }
    },
    // eslint-disable-next-line
    [loading]
  );

  return [handleCreateOrderCard];
};

export default OrderPayCardHook;
