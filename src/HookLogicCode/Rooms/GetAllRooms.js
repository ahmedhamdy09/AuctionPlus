import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../Redux/Actions/RoomsAction";

const GetAllRooms = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      setLoading(true);
      dispatch(getAllEvents());
      setLoading(false);
    },
    // eslint-disable-next-line
    []
  );
  const res = useSelector((state) => state.roomsReducers.getAllEvents);

  useEffect(
    () => {
      if (loading === false) {
        if (res && res.status === true) {
          console.log(res);
        }
      }
    },
    // eslint-disable-next-line
    [loading]
  );
  return [res];
};

export default GetAllRooms;
