import React, { useEffect, useState } from "react";
import "./UpplivesShow3.css";
import userImg from "./images/user-regular.svg";
import star from "./images/star-solid.svg";
import eye from "./images/eye-regular.svg";
import share from "./images/arrow-up-from-bracket-solid.svg";
import { VideoRoom } from "../../HookLogicCode/Rooms/Agoraroom/videoRoom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneEvent, leaveFromEvent } from "../../Redux/Actions/RoomsAction";
// import { VideoRoom } from "./VideoTest/VideoRoom";

const UppliveShow3 = () => {
  // const [joined, setJoined] = useState(false);
  const temp = JSON.parse(localStorage.getItem("user"));
  console.log("🚀 ~ CreateRooms ~ temp:", temp);
  const { id } = useParams();
  const [isPublished, setIsPublished] = useState(false);
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem("user"));
  console.log("🚀 ~ UppliveShow3 ~ temp:", userData);
  useEffect(() => {
    const fetchEvent = () => {
      dispatch(getOneEvent(id));
    };

    // Initial call
    fetchEvent();

    // Set interval to call fetchEvent every 30 seconds
    const interval = setInterval(fetchEvent, 30000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, [dispatch, id]);
  const res = useSelector((state) => state.roomsReducers.OneEvent);
  console.log("🚀 ~ AuctionLivePage ~ res:", res);
  const LeaveRoom = async () => {
    await dispatch(leaveFromEvent(id));
    window.location.href = "/";
  };
  // const startBroadcast = () => {
  //   // Start the broadcast
  //   // setJoined(true);
  //   setIsPublished(true);
  // };

  const stopBroadcast =async() => {
    // Stop the broadcast
    setIsPublished(false);
    await dispatch(leaveFromEvent(id));
    window.location.href = "/";
  };

  return (
    <>
      <div className="parent">
        <div className="main">
          <div className="content1">
            <div className="userlogo">
              <img src={userImg} alt="user" className="user" />
            </div>
            <div className="con1">
              <p className="u_name">{userData?.name}</p>
              {/* <div style={{ display: "flex" }}>
                <span className="r_num">0.0</span>
                <span>
                  <img src={star} alt="rate" className="star" />
                </span>
                <button type="button" class="btn btn-info follow-btn">
                  Follow
                </button>
              </div> */}
              {/* <br />
              <div style={{ display: "flex", marginTop: "-30px" }}>
                <span className="num">0K</span>{" "}
                <span className="follow">Followers</span>
              </div> */}
            </div>
          </div>
          <div className="content2">
            <img src={eye} alt="seen" className="eye" />
            <span className="n_10">545</span>{" "}
            <span className="leave_txt" onClick={LeaveRoom}>
              Leave
            </span>
          </div>
        </div>
        {res?.event ? (
          <VideoRoom res={res} />
        ) : (
          <div className="main_comp">
            <p className="p1" style={{color:"#ddd"}}>Wait for the host to start the show</p>
            <p className="p2">{new Date(res?.eventDate).toLocaleString()}</p>
          </div>
        )}
      </div>

      {/* {<VideoRoom className="video-container" />} */}
      <div className="foot">
        <div className="comment">
          <input
            type="text"
            placeholder="Add a comment..."
            className="form-control"
          />
        </div>
        <div className="share_icon">
          <span className="share_txt">Share</span>
          <img src={share} alt="share" class="shareIcon" />
          {isPublished && (
            <button
              type="button"
              className="btn btn-danger live-btn"
              onClick={stopBroadcast}>
              Stop Broadcast
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default UppliveShow3;

// import React from "react";
// import auctionPana from "../../assets/Auction-pana 1.png";
// import "./EditMeet.css";
// const UpplivesShow3 = () => {
//   return (
//     <>
//       <div className="container-auciton">
//         <div className="left-side">
//           <button type="submit" className="btn btn-danger leave">
//             Leave
//           </button>
//           <img src={auctionPana} alt="auction" className="auciton-img" />
//           <p>Wait for the host to start th show</p>
//         </div>
//         <div className="right-side">
//           <h2>Chat</h2>
//           <hr />
//           <p>Ahmed Hamdy</p>
//           <p>Ahmed Hamdy</p>
//           <p>Ahmed Hamdy</p>
//           <p>Ahmed Hamdy</p>
//           <p>Ahmed Hamdy</p>
//           <hr />
//           <input
//             type="text"
//             className="form-control input1"
//             id="exampleFormControlInput1"
//             placeholder="Enter You Bid Message"
//           />{" "}
//         </div>
//       </div>
//     </>
//   );
// };

// export default UpplivesShow3;
