import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUser } from "../../Redux/Actions/AddressAction";

const GetLoggedUserHook = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      setLoading(true);
      dispatch(getLoggedUser());
      setLoading(false);
    },
    // eslint-disable-next-line
    []
  );
  const resLoggedUser = useSelector(
    (state) => state.userAddressReducer.getLoggedUser
  );
  console.log(resLoggedUser);

  useEffect(
    () => {
      if (loading === false) {
        //   if (resLoggedUser && resLoggedUser.status === true) {
        //   }
      }
    },
    // eslint-disable-next-line
    [loading]
  );
  return [resLoggedUser];
};

export default GetLoggedUserHook;
