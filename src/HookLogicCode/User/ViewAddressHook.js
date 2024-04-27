import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserAddress } from "../../Redux/Actions/AddressAction";

const ViewAddressHook = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  useEffect(
    () => {
      const get = async () => {
        setLoading(true);
        await dispatch(getAllUserAddress());
        setLoading(false);
      };
      get();
    },
    // eslint-disable-next-line
    []
  );
  const res = useSelector((state) => state.userAddressReducer.userAddress);
console.log(res);
  return [res];
};

export default ViewAddressHook;
