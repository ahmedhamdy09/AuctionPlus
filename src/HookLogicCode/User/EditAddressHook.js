import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneUserAddress,
  updateAddress,
} from "../../Redux/Actions/AddressAction";
import { useNavigate } from "react-router-dom";
import notify from "../../HookLogicCode/useNotifaction";

const EditAddressHook = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [alias, setAlias] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingEdit, setLoadingEdit] = useState(true);

  const onChangeAlias = (e) => {
    e.persist();
    setAlias(e.target.value);
  };
  const onChangeDetails = (e) => {
    e.persist();
    setDetails(e.target.value);
  };
  const onChangePhone = (e) => {
    e.persist();
    setPhone(e.target.value);
  };

  useEffect(
    () => {
      const get = async () => {
        setLoading(true);
        await dispatch(getOneUserAddress(id));
        setLoading(false);
      };
      get();
    },
    // eslint-disable-next-line
    []
  );

  const res = useSelector((state) => state.userAddressReducer.oneUserAddress);
  // console.log(res);
  useEffect(
    () => {
      if (loading === false) {
        if (res && res.status === "success") {
          setAlias(res.data.alias);
          setDetails(res.data.details);
          setPhone(res.data.phone);
        }
      }
    },
    // eslint-disable-next-line
    [loading]
  );

  const handleEditAddress = async () => {
    setLoadingEdit(true);
    await dispatch(
      updateAddress(id, {
        alias: alias,
        details: details,
        phone: phone,
      })
    );
    setLoadingEdit(false);
  };

  const resEdit = useSelector(
    (state) => state.userAddressReducer.updateUserAddress
  );

  useEffect(
    () => {
      if (loadingEdit === false) {
        if (resEdit && resEdit.status === "success") {
          notify("Address Updated Success", "success");
          setTimeout(() => {
            navigate("/user/addresses");
          }, 1500);
        } else {
          notify("This Address Not Updated", "error");
        }
      }
    },
    // eslint-disable-next-line
    [loadingEdit]
  );

  return [
    handleEditAddress,
    alias,
    details,
    phone,
    onChangeAlias,
    onChangeDetails,
    onChangePhone,
  ];
};

export default EditAddressHook;
