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
//   let address = [];
//   useEffect(
//     () => {
//       if (loading === false) {
//         if (res) {
//           address = res.data;
//         }
//       }
//     },
//     // eslint-disable-next-line
//     [loading]
//   );
  return [res];
};

export default ViewAddressHook;
