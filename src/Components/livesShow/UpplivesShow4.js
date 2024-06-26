import React, { useEffect, useState } from "react";
import "./UpplivesShow4.css";
import chRight from "./images/chevron-right-solid.svg";
import clock from "./images/clock-solid.svg";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {
  createNewEvents,
  generateAgoraToken,
  getOneEvent,
  updateRoomAction,
} from "../../Redux/Actions/RoomsAction";
import Multiselect from "multiselect-react-dropdown";
import { getAllProductsRoom } from "../../Redux/Actions/ProductsActions";
import notify from "../../HookLogicCode/useNotifaction";
import { getAllUser } from "../../Redux/Actions/AuthAction";

const UppliveShow4 = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [productName, setProductName] = useState([]);
  const [addUsers, setAddUsers] = useState([]);

  const [addressEvent, setAddressEvent] = useState("");
  const temp = JSON.parse(localStorage.getItem("user"));

  const handleChange = () => {
    setIsChecked((prevIsChecked) => !prevIsChecked);
  };

  const onRemoveProduct = (selectedList) => {
    const selectedIds = selectedList.map((item) => item._id);
    setProductName({ selectedIds });
  };
  const onSelectProduct = (selectedList) => {
    const selectedIds = selectedList.map((item) => item._id);
    setProductName({ selectedIds });
  };
  const dispatch = useDispatch();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const AllProducts = useSelector(
    (state) => state.allproducts.getallproductroom
  );
  console.log("🚀 ~ CreateRooms ~ AllProducts:", AllProducts);
  useEffect(() => {
    dispatch(getAllProductsRoom());
    dispatch(getAllUser());
    // dispatch(getOneEvent(id));
  }, []);
  // const res = useSelector((state) => state.roomsReducers.OneEvent);
  const generateToken = useSelector(
    (state) => state.roomsReducers.generateAgoratoken
  );
  const resLoggedUser = useSelector((state) => state.authReducer.loggedUser);
  const onRemoveUser = (selectedList) => {
    const selectedIds = selectedList.map((item) => item._id);
    setAddUsers({ selectedIds });
  };
  const onSelectUser = (selectedList) => {
    const selectedIds = selectedList.map((item) => item._id);
    setAddUsers({ selectedIds });
  };
  const handleJoinHost = async (id) => {
    setLoading(true);
    // localStorage.setItem("generateName", channal);
    // localStorage.setItem("generateToken", Token);
    await dispatch(updateRoomAction(id, { event: true }));
    setTimeout(() => {
      navigate(`/uplivethree/${id}`);
    }, 2000);

    // if (chat === true) {
    //   // await dispatch(
    //   //   generateAgoraTokenChat({
    //   //     channel: channal,
    //   //   })
    //   // );
    //   setLoading(false);
    // } else if (chat === false) {
    //   // await dispatch(
    //   //   generateAgoraToken({
    //   //     channel: channal,
    //   //   })
    //   // );
    //   setLoading(false);
    // }
  };
  const handleSubmit = async () => {
    setLoading(true);
    await dispatch(
      generateAgoraToken({
        channel: addressEvent,
      })
    );
    if (generateToken !== null || generateToken !== undefined) {
      await dispatch(
        createNewEvents(temp._id, {
          title: addressEvent,
          productIds: productName?.selectedIds,
          userIds: addUsers?.selectedIds,
          hostIds: [temp._id],
          allowchat: isChecked,
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
            handleJoinHost(resCreateRoom?.data?.newRoom._id);
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

  return (
    <div className="parent">
      <p className="intro-txt" style={{ justifyContent: "initial" }}>
        Direct talk name
      </p>
      <p className="sub_p" style={{ justifyContent: "initial" }}>
        What do you want to talk about?
      </p>
      <input
        type="text"
        className="form-control mb-3 inp"
        value={addressEvent}
        onChange={(e) => setAddressEvent(e.target.value)}
      />
      <div className="arrow ">
        <Multiselect
          options={resLoggedUser && resLoggedUser.data} // Options to display in the dropdown
          selectedValues={resLoggedUser && resLoggedUser.data?._id} // Preselected value to persist in dropdown
          onSelect={onSelectUser} // Function will trigger on select event
          onRemove={onRemoveUser} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
          placeholder="select users"
        />

        <img src={chRight} alt="arrow" />
      </div>

      <div className="arrow">
        <Multiselect
          options={AllProducts && AllProducts.data} // Options to display in the dropdown
          selectedValues={AllProducts && AllProducts.data?._id} // Preselected value to persist in dropdown
          onSelect={onSelectProduct} // Function will trigger on select event
          onRemove={onRemoveProduct} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
          placeholder="select products"
        />

        <img src={chRight} alt="arrow" />
      </div>

      {/* <div className="channel-section">
        <div className="channel">Channel selection</div>
        <div className="arrow">
          <img src={chRight} alt="arrow" />
        </div>
      </div>
      <p className="sub_p">Select the channel for live broadcast</p> */}

      <div className="chat-section">
        <div className="contentA">
          <p className="text-chat">Text chat</p>
          <label className="switchOnOff">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleChange}
              className="onOffinputs"
            />
            <span className="sliderSpans"></span>
          </label>
        </div>
        <p className="p_foot">
          Can the audience send messages in a live Tok broadcast?
        </p>
      </div>

      {/* <div className="time">
        <img src={clock} alt="start time" class="clock" />
        <input
          type="text"
          className="form-control mb-3 inp"
          placeholder="Start Time"
        />
      </div>

      <div className="time">
        <img src={clock} alt="start time" class="clock" />
        <input
          type="text"
          className="form-control mb-3 inp"
          placeholder="End Time"
        />
      </div> */}

      <div className="live">
        <button
          type="button"
          className="btn btn-info live-btn"
          onClick={handleSubmit}>
          Live broadcast
        </button>
      </div>
    </div>
  );
};

export default UppliveShow4;
