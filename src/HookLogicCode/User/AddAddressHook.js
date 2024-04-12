import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../HookLogicCode/useNotifaction";

const AddAddressHook = () => {
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
    await dispatch();
    setLoading(false);
  };
  return [alias, details, phone, onChangeAlias, onChangeDetails, onChangePhone,onSubmit];
};

export default AddAddressHook;
