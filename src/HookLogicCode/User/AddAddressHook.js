import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../HookLogicCode/useNotifaction";
import { addUserAddress } from "../../Redux/Actions/AddressAction";
import { useNavigate } from "react-router-dom";

const AddAddressHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [alias, setAlias] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);

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

  const onSubmit = async () => {
    if (alias === "" || details === "" || phone === "") {
      notify("Please fill all the fields", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      addUserAddress({
        alias: alias,
        details: details,
        phone: phone,
        city: "",
        postalCode: "",
      })
    );
    setLoading(false);
  };
  const res = useSelector((state) => state.userAddressReducer.addUserAddress);

  useEffect(
    () => {
      if (loading === false) {
        if (res && res.status === 200) {
          notify("Address added Success", "success");
          setTimeout(() => {
            navigate("/user/addresses");
          }, 1000);
        } else {
          notify("This Address Not Added", "error");
        }
      }
    },
    // eslint-disable-next-line
    [loading]
  );

  return [
    alias,
    details,
    phone,
    onChangeAlias,
    onChangeDetails,
    onChangePhone,
    onSubmit,
  ];
};

export default AddAddressHook;
