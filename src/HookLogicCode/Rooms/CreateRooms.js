import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewEvents } from "../../Redux/Actions/RoomsAction";
// import { useNavigate } from "react-router-dom";

const CreateRooms = (id) => {
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const [addressEvent, setAddressEvent] = useState("");
  const [addUsers, setAddUsers] = useState("");
  const [productName, setProductName] = useState("");
  const [channelSelection, setChannelSelection] = useState("");
  const [DateLiveBroadCast, setDateLiveBroadCast] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeAddressEvent = (e) => {
    e.persist();
    setAddressEvent(e.target.value);
  };
  const onChangeAddUsers = (e) => {
    e.persist();
    setAddUsers(e.target.value);
  };
  const onChangeProductName = (e) => {
    e.persist();
    setProductName(e.target.value);
  };
  const onChangeChannelSelection = (e) => {
    e.persist();
    setChannelSelection(e.target.value);
  };
  const onChangeDateLiveBroadCast = (e) => {
    e.persist();
    setDateLiveBroadCast(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    await dispatch(
      createNewEvents(id, {
        title: addressEvent,
        eventDate: DateLiveBroadCast,
      })
    );
    setLoading(false);
  };

  const resCreateRoom = useSelector(
    (state) => state.roomsReducers.createNewEvents
  );

  useEffect(
    () => {
      if (loading === false) {
        // console.log(resCreateRoom);
        // setTimeout(() => {
        //   navigate("/upliveone");
        // }, 1500);
      }
    },
    // eslint-disable-next-line
    [loading]
  );

  return [
    addressEvent,
    addUsers,
    productName,
    channelSelection,
    DateLiveBroadCast,
    onChangeAddressEvent,
    onChangeAddUsers,
    onChangeProductName,
    onChangeChannelSelection,
    onChangeDateLiveBroadCast,
    handleSubmit,
  ];
};

export default CreateRooms;
