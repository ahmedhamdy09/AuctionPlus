import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editCoupon, getOneCoupon } from "../../Redux/Actions/CouponsAction";
import notify from "../../HookLogicCode/useNotifaction";
import { useNavigate } from "react-router-dom";

const EditCouponHook = (id) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [couponname, setCouponName] = useState("");
  const [coupondate, setCouponDate] = useState("");
  const [couponValue, setCouponValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(true);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const resOneCupon = useSelector((state) => state.couponReducer.oneCoupon);

  useEffect(
    () => {
      const get = async () => {
        setLoadingData(true);
        await dispatch(getOneCoupon(id));
        setLoadingData(false);
      };
      get();
    },
    // eslint-disable-next-line
    []
  );

  useEffect(
    () => {
      if (loadingData === false) {
        if (resOneCupon.data) {
          setCouponName(resOneCupon.data.name);
          setCouponDate(formatDate(resOneCupon.data.expire));
          setCouponValue(resOneCupon.data.discount);
        }
      }
    },
    // eslint-disable-next-line
    [loadingData]
  );

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

  const res = useSelector((state) => state.couponReducer.editCoupon);

  const onSubmit = async () => {
    if (couponname === "" || coupondate === "" || couponValue <= 0) {
      notify("Please fill all the fields", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      editCoupon(id, {
        name: couponname,
        expire: coupondate,
        discount: couponValue,
      })
    );
    setLoading(false);
  };

  useEffect(
    () => {
      if (loading === false) {
        if (res && res.status === 200) {
          notify("Coupon Edit Success", "success");
          setTimeout(() => {
            navigate("/admin/addcoupons");
          }, 1500);
          // window.location.reload(false);
        } else {
          notify("This coupon Not Edit", "error");
        }
      }
    },
    // eslint-disable-next-line
    [loading]
  );

  return [
    couponname,
    coupondate,
    couponValue,
    onChangeCouponName,
    onChangeCouponDate,
    onChangeCouponValue,
    onSubmit,
  ];
};

export default EditCouponHook;
