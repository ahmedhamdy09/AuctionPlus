import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./UpplivesShow6.css";
import { getAllActiveEvents, updateRoomAction } from "../../Redux/Actions/RoomsAction";
const UpplivesShow6 = () => {
    const navigate = useNavigate();
    const temp = JSON.parse(localStorage.getItem("user"));
    console.log("🚀 ~ CreateRooms ~ temp:", temp);
    const dispatch = useDispatch();
    const handleJoinHost = async (id) => {
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
    const res = useSelector((state) => state.roomsReducers.getActiveRoom);
    console.log("🚀 ~ AuctionLivePage ~ res:", res)
    useEffect(() => {
      dispatch(getAllActiveEvents());
    }, []);
    console.log("🚀 ~ AuctionLivePage ~ res:", res);
  return (
    <div className="p-5" > 
              <div className="contAuction">
            <h3 className="livesMeet">Live Now</h3>
            <div className="livenow">
              {res&&res.rooms?.map((user) => (
                <div className="userr">
                  <>
                  
                    {/* <h4 style={{ color: "#2a95bd " }}>Hosts</h4> */}
                    <h4>{user.title}</h4>
                    {user.ownerId._id === temp._id ? (
                      <button
                        type="button"
                        className="btn btn-info live-btn"
                        onClick={() => handleJoinHost(user?._id)}>
                        Join Now
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-info live-btn"
                        onClick={() => handleJoinUser(user?._id)}>
                        Join Now
                      </button>
                    )}
                    <h4>{user.email}</h4>
                  </>
                </div>
              ))}
            </div>
            <br />
          </div>
    </div>
  );
};

export default UpplivesShow6;
