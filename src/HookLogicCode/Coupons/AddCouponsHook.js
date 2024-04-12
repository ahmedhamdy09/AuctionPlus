import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoupon, getAllCoupon } from "../../Redux/Actions/CouponsAction";
import notify from "../../HookLogicCode/useNotifaction";

const AddCouponHook = () => {
  const dispatch = useDispatch();
  const [couponname, setCouponName] = useState("");
  const [coupondate, setCouponDate] = useState("");
  const [couponValue, setCouponValue] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeCouponName = (e) => {
    e.persist();
    setCouponName(e.target.value);
  };
  const onChangeCouponDate = (e) => {
    e.persist();
    setCouponDate(e.target.value);
  };
  const onChangeCouponValue = (e) => {
    e.persist();
    setCouponValue(e.target.value);
  };

  const onSubmit = async () => {
    if (couponname === "" || coupondate === "" || couponValue <= 0) {
      notify("Please fill all the fields", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      addCoupon({
        name: couponname,
        expire: coupondate,
        discount: couponValue,
      })
    );
    setLoading(false);
  };
  const res = useSelector((state) => state.couponReducer.addCoupon);

  useEffect(
    () => {
      if (loading === false) {
        if (res && res.status === 201) {
          notify("Coupon added Success", "success");
          // setCouponName("");
          // setCouponDate("");
          // setCouponValue("");
          window.location.reload(false);
        } else if (res && res.status === 400) {
          notify("This coupon is a duplicate", "error");
        } else if (res && res.status === 403) {
          notify("You are not allowed", "error");
        }
      }
    },
    // eslint-disable-next-line
    [loading]
  );

  const resGetAllCoupons = useSelector(
    (state) => state.couponReducer.allCoupon
  );

  useEffect(
    () => {
      const get = async () => {
        await dispatch(getAllCoupon());
      };
      get();
    },
    // eslint-disable-next-line
    []
  );

  let coupons = [];
  try {
    if (resGetAllCoupons && resGetAllCoupons.data.length >= 1) {
      coupons = resGetAllCoupons.data;
    }
  } catch (e) {}

  return [
    couponname,
    coupondate,
    couponValue,
    onChangeCouponName,
    onChangeCouponDate,
    onChangeCouponValue,
    onSubmit,
    coupons,
  ];
};

export default AddCouponHook;
