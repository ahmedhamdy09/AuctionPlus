import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GetAllUserCartHook from "../Cart/GetAllUserCartHook";
import notify from "../../HookLogicCode/useNotifaction";
import { getOneUserAddress } from "../../Redux/Actions/AddressAction";
import { createOrderCash } from "../../Redux/Actions/CheckOutAction";
const OrderPayCash = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [loadingCreate, setLoadingCreate] = useState(true);
  const [addressDetails, setAddressDetails] = useState([]);
  const [, , , , , cartID] = GetAllUserCartHook();

  // when change address by user
  const handleChooseAddress = (e) => {
    if (e.target.value !== "0") {
      setAddressDetails([]);
      get(e.target.value);
    }
  };
  const get = async (id) => {
    setLoading(true);
    await dispatch(getOneUserAddress(id));
    setLoading(false);
  };

  // get address details from user
  const res = useSelector((state) => state.userAddressReducer.oneUserAddress);
  useEffect(
    () => {
      if (loading === false) {
        if (res && res.status === "success") {
          setAddressDetails(res.data);
        } else {
          setAddressDetails([]);
        }
      }
    },
    // eslint-disable-next-line
    [loading]
  );

  // create a new cash order response
  const resCreateCashOrders = useSelector(
    (state) => state.cashOrderReducers.createCashOrder
  );
  console.log(resCreateCashOrders);
  useEffect(
    () => {
      if (loadingCreate === false) {
        if (resCreateCashOrders && resCreateCashOrders.status === 201) {
          notify("Create Cash Order Successfully", "success");
          setTimeout(() => {
            navigate("/user/allorders");
          }, 1500);
        } else {
          notify("Failed To Cash Order ", "error");
        }
      }
    },
    // eslint-disable-next-line
    [loadingCreate]
  );

  // when user click pay
  const createOrderCashClick = async () => {
    if (cartID === "0") {
      notify("please add prodcut to cart first..", "warn");
      return;
    }
    if (addressDetails.length <= 0) {
      notify("please choose address first..", "warn");
      return;
    }
    setLoadingCreate(true);
    await dispatch(
      createOrderCash(cartID, {
        shippingAddress: {
          details: addressDetails.alias,
          phone: addressDetails.phone,
          city: "",
          postalCode: "",
        },
      })
    );
    setLoadingCreate(false);
  };

  return [handleChooseAddress, addressDetails, createOrderCashClick];
};

export default OrderPayCash;
