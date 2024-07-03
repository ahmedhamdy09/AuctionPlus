import React, { useEffect, useState } from "react";
import "./UpplivesShow3.css";
import userImg from "./images/user-regular.svg";
import star from "./images/star-solid.svg";
import eye from "./images/eye-regular.svg";
import share from "./images/arrow-up-from-bracket-solid.svg";
import cart from "../../assets/cart.png";
import { VideoRoom } from "../../HookLogicCode/Rooms/Agoraroom/videoRoom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneEvent, leaveFromEvent } from "../../Redux/Actions/RoomsAction";
import { LiveUrl } from "../../Api/baseURL";
import { Button, Modal } from "react-bootstrap";
import Chat from "../../HookLogicCode/Rooms/Agoraroom/chatroom";
// import { VideoRoom } from "./VideoTest/VideoRoom";

const UppliveShow3 = () => {
  // const [joined, setJoined] = useState(false);
  const [showName, setshowName] = useState(false);
  const [showChoose, setshowChoose] = useState(false);

  const temp = JSON.parse(localStorage.getItem("user"));
  console.log("🚀 ~ CreateRooms ~ temp:", temp);
  const { id } = useParams();
  const [isPublished, setIsPublished] = useState(false);
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem("user"));
  console.log("🚀 ~ UppliveShow3 ~ temp:", userData);
  const handleCloseName = () => setshowName(false);
  const handleShowName = () => setshowName(true);

  const handleCloseChoose = () => setshowChoose(false);
  const handleShowChoose = () => setshowChoose(true);

  const copyUrlToClipboard = (id) => {
    const url = `${LiveUrl}/uplivethree/${id}`; // Get the current URL
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("URL copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
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

  const stopBroadcast = async () => {
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
            <p className="p1" style={{ color: "#ddd" }}>
              Wait for the host to start the show
            </p>
            <p className="p2">{new Date(res?.eventDate).toLocaleString()}</p>
          </div>
        )}
      </div>

      {/* {<VideoRoom className="video-container" />} */}

      <div className="foot">
        {res?.allowchat ? (
          // <div className="comment">
          //   <input
          //     type="text"
          //     placeholder="Add a comment..."
          //     className="form-control"
          //   />
          // </div>
          <>
          <Chat res={res}/></>
        ) : null}
        <div className="share_icon">
          <span
            className="share_txt"
            onClick={() => copyUrlToClipboard(res?._id)}>
            Share
          </span>
          <img
            src={share}
            alt="share"
            class="shareIcon"
            onClick={() => copyUrlToClipboard(res?._id)}
          />
          <img
            src={cart}
            style={{
              backgroundColor: "#333",
              padding: "4px",
              borderRadius: "6px",
            }}
            alt="share"
            class="shareIcon"
            onClick={handleShowName}
          />

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
      <Modal
        show={showName}
        onHide={handleCloseName}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Tag More Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <input className="managsearch" type="text" placeholder="أبحث" /> */}
          <div style={{ width: "100%" }} className="maintag">
            {res?.productIds?.map((productId) => (
              <>
                <div
                  style={{ width: "100%", position: "relative" }}
                  className="tage">
                  <h6>{productId.name}</h6>
                  <h6>{productId.price}</h6>
                  <i className="fa-solid fa-plus choose"onClick={handleShowChoose}></i>
                </div>
                <hr />
              </>
            ))}
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            className="close"
            onClick={handleCloseName}>
            Cancel
          </Button>
          {/* <Button variant="primary" className="edit">
            إختيار
          </Button> */}
        </Modal.Footer>
      </Modal>
      <Modal
        show={showChoose}
        onHide={handleCloseChoose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <input className="managsearch" type="text" placeholder="أبحث" /> */}
          <div style={{ width: "100%" }} className="maintag">
          
              <>
                <div
                  style={{ width: "100%", position: "relative" }}
                  className="tage">
                    <button className="btn-login w-100" >Start Auction</button>
                    <hr/>
                    <button className="btn-login  w-100 " >Return To Store</button>


                </div>
              </>
       
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            className="close"
            onClick={handleCloseChoose}>
            Cancel
          </Button>
          {/* <Button variant="primary" className="edit">
            إختيار
          </Button> */}
        </Modal.Footer>
      </Modal>
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
