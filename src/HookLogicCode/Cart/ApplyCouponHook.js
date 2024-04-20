import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../HookLogicCode/useNotifaction";
import { applyCouponToCart } from "../../Redux/Actions/CartAction";

const ApplyCouponHook = () => {
  const dispatch = useDispatch();
  const [couponName, setCouponName] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeCoupon = (e) => {
    setCouponName(e);
  };

  const handleSubmitCoupon = async () => {
    if (couponName === "") {
      notify("Please enter a coupon name", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      applyCouponToCart({
        coupon: couponName,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.addProductToCart.applyCouponToCart);
  useEffect(
    () => {
      if (loading === false) {
        if (res && res.status === 200) {
            notify("Prodcut Will Discount Success", "success");
            setTimeout(() => {
              window.location.reload(false);
            }, 1000);
          } else {
            notify("This Coupon is Expired", "error");
        }
      }
    },
    // eslint-disable-next-line
    [loading]
  );
  return [couponName, onChangeCoupon, handleSubmitCoupon];
};

export default ApplyCouponHook;
