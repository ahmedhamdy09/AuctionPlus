import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createNewEvents,
  generateAgoraToken,
} from "../../Redux/Actions/RoomsAction";
import { getAllUser } from "../../Redux/Actions/AuthAction";
import { getAllProductsRoom } from "../../Redux/Actions/ProductsActions";
import { json, useNavigate } from "react-router-dom";
import notify from "../useNotifaction";
// import { useNavigate } from "react-router-dom";

const CreateRooms = () => {
  const dispatch = useDispatch();
  const temp = JSON.parse(localStorage.getItem("user"));
  console.log("🚀 ~ CreateRooms ~ temp:", temp);
  //   const navigate = useNavigate();
  const [addressEvent, setAddressEvent] = useState("");
  console.log("🚀 ~ CreateRooms ~ addressEvent:", addressEvent);
  const [addUsers, setAddUsers] = useState([]);
  const navigate = useNavigate();
  console.log("🚀 ~ CreateRooms ~ addUsers:", addUsers.selectedIds);
  const [productName, setProductName] = useState([]);
  console.log("🚀 ~ CreateRooms ~ productName:", productName.selectedIds);
  const [channelSelection, setChannelSelection] = useState("");
  const [DateLiveBroadCast, setDateLiveBroadCast] = useState("");
  const [Description, setDescription] = useState("");

  console.log("🚀 ~ CreateRooms ~ DateLiveBroadCast:", DateLiveBroadCast);
  const [loading, setLoading] = useState(true);
  const AllProducts = useSelector(
    (state) => state.allproducts.getallproductroom
  );
  console.log("🚀 ~ CreateRooms ~ AllProducts:", AllProducts);

  useEffect(() => {
    dispatch(getAllProductsRoom());
    dispatch(getAllUser());
  }, []);

  const [isChecked, setIsChecked] = useState(false);
  console.log("🚀 ~ CreateRooms ~ isChecked:", isChecked);
  const handleChange = () => {
    setIsChecked((prevIsChecked) => !prevIsChecked);
  };
  const resLoggedUser = useSelector((state) => state.authReducer.loggedUser);
  const onRemoveUser = (selectedList) => {
    const selectedIds = selectedList.map((item) => item._id);
    setAddUsers({ selectedIds });
  };
  const onSelectUser = (selectedList) => {
    const selectedIds = selectedList.map((item) => item._id);
    setAddUsers({ selectedIds });
  };

  const onRemoveProduct = (selectedList) => {
    const selectedIds = selectedList.map((item) => item._id);
    setProductName({ selectedIds });
  };
  const onSelectProduct = (selectedList) => {
    const selectedIds = selectedList.map((item) => item._id);
    setProductName({ selectedIds });
  };
  console.log("🚀 ~ CreateRooms ~ resLoggedUser:", resLoggedUser);

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
  console.log("🚀 ~ handleSubmit ~ [temp._id]:", [temp._id]);
  function convertToTimestamp(DateLiveBroadCast) {
    console.log(
      "🚀 ~ convertToTimestamp ~ DateLiveBroadCast:",
      DateLiveBroadCast
    );
    const dateObject = new Date(DateLiveBroadCast);
    return dateObject.getTime();
  }
  const generateToken = useSelector(
    (state) => state.roomsReducers.generateAgoratoken
  );
  console.log("🚀 ~ CreateRooms ~ generateToken:", generateToken);

  const handleSubmit = async () => {
    setLoading(true);
    await dispatch(
      generateAgoraToken({
        channel: addressEvent,
      })
    );
    if (generateToken) {
      await dispatch(
        createNewEvents(temp._id, {
          title: addressEvent,
          eventDate: convertToTimestamp(DateLiveBroadCast),
          productIds: productName?.selectedIds,
          userIds: addUsers?.selectedIds,
          hostIds: [temp._id],
          allowchat: isChecked,
          description: Description,
          token: generateToken.data?.token,
        })
      );
    }

    setLoading(false);
  };

  // eslint-disable-next-line
  const resCreateRoom = useSelector(
    (state) => state.roomsReducers.createNewEvents
  );
  console.log("🚀 ~ CreateRooms ~ resCreateRoom:", resCreateRoom);

  useEffect(
    () => {
      if (loading === false) {
        setTimeout(() => setLoading(true), 1500);
        if (resCreateRoom) {
          if (resCreateRoom.status === 200 || resCreateRoom.status === 201) {
            notify("event created successfully", "success");
          window.location.href="/upliveone";
          } else if (
            resCreateRoom.status !== 200 ||
            resCreateRoom.status !== 201
          ) {
            notify("Error Pleae Try Again", "warn");
          }
        }
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
    onRemoveUser,
    onSelectUser,
    resLoggedUser,
    AllProducts,
    onSelectProduct,
    onRemoveProduct,
    isChecked,
    setIsChecked,
    handleChange,
    setDescription,
    Description,
  ];
};

export default CreateRooms;
