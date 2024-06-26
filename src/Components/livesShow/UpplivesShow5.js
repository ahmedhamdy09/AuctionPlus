import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./UpplivesShow5.css";
import {
  generateAgoraToken,
  generateAgoraTokenChat,
  getOneEvent,
  updateRoomAction,
} from "../../Redux/Actions/RoomsAction";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import notify from "../../HookLogicCode/useNotifaction";
const UpplivesShow5 = () => {
  const dispatch = useDispatch();
  const temp = JSON.parse(localStorage.getItem("user"));
  console.log("🚀 ~ CreateRooms ~ temp:", temp);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOneEvent(id));
  }, [id]);
  const res = useSelector((state) => state.roomsReducers.OneEvent);
  console.log("🚀 ~ AuctionLivePage ~ res:", res);
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

  const handleJoinUser = async (id) => {
    setLoading(true);
    // localStorage.setItem("generateName", channal);
    // localStorage.setItem("generateToken", Token);
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
  const generateToken = useSelector(
    (state) => state.roomsReducers.generateAgoratoken
  );
  const generateTokenChat = useSelector(
    (state) => state.roomsReducers.generateAgoratokenChat
  );
  useEffect(
    () => {
      if (loading === false) {
        setTimeout(() => setLoading(true), 1500);
        if (generateToken) {
          if (generateToken.status === 200 || generateToken.status === 201) {
            if (generateToken.data) {
              // notify("event created successfully", "success");
              localStorage.setItem("generateToken", generateToken.data.token);
              // navigate("/upliveone");
              setTimeout(() => {
                navigate("/uplivethree");
              }, 2000);
            }
          } else if (
            generateToken.status !== 200 ||
            generateToken.status !== 201
          ) {
            if (generateToken.data) {
              notify("Error Pleae Try Again", "warn");
            } else {
              notify("Error Pleae Try Again", "warn");
            }
          }
        }

        if (generateTokenChat) {
          if (
            generateTokenChat.status === 200 ||
            generateTokenChat.status === 201
          ) {
            if (generateTokenChat.data) {
              // notify("event created successfully", "success");
              localStorage.setItem(
                "generateToken",
                generateTokenChat.data.token
              );
              // navigate("/upliveone");
              setTimeout(() => {
                navigate("/uplivethree");
              }, 2000);
            }
          } else if (
            generateTokenChat.status !== 200 ||
            generateTokenChat.status !== 201
          ) {
            if (generateTokenChat.data) {
              notify("Error Pleae Try Again", "warn");
            } else {
              notify("Error Pleae Try Again", "warn");
            }
          }
        }
      }
    },
    // eslint-disable-next-line
    [loading]
  );
  return (
    <div className="details">
      <h3 className=" m-10">Title : {res?.title}</h3>
      <h3 className=" m-10">
        Date&Time : {new Date(res?.eventDate).toLocaleString()}
      </h3>
      {res && res.ownerId&&res.ownerId._id === temp._id ? (
        <button
          type="button"
          className="btn btn-info live-btn"
          onClick={() => handleJoinHost(res?._id)}>
          Join Now
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-info live-btn"
          onClick={() => handleJoinUser(res?._id)}>
          Join Now
        </button>
      )}

      <div className="main-pr-us">
        <div className="hostuser">
          {res?.hostIds?.map((user) => (
            <div className="userr">
              <>
                <h4 style={{ color: "#2a95bd " }}>Hosts</h4>
                <h4>{user.name}</h4>
                <h4>{user.email}</h4>
              </>
            </div>
          ))}
          {res?.userIds?.map((user) => (
            <div className="userr">
              <>
                <h4 style={{ color: "#2a95bd " }}>Users</h4>
                <h4>{user.name}</h4>
                <h4>{user.email}</h4>
              </>
            </div>
          ))}
        </div>
        <div className="product-hu">
          <CardProductsContainer products={res?.productIds} />
        </div>
      </div>
    </div>
  );
};

export default UpplivesShow5;
