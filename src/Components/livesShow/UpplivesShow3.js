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
import {
  createAuction,
  getActiveAuction,
  getOneEvent,
  leaveFromEvent,
  updateAuction,
} from "../../Redux/Actions/RoomsAction";
import { LiveUrl } from "../../Api/baseURL";
import { Button, Modal } from "react-bootstrap";
import Chat from "../../HookLogicCode/Rooms/Agoraroom/chatroom";
// import { VideoRoom } from "./VideoTest/VideoRoom";

const UppliveShow3 = () => {
  // const [joined, setJoined] = useState(false);
  const [showName, setshowName] = useState(false);
  const [showChoose, setshowChoose] = useState(false);
  const [showMainMazad, setshowMainMazad] = useState(false);

  const temp = JSON.parse(localStorage.getItem("user"));
  console.log("🚀 ~ CreateRooms ~ temp:", temp);
  const { id } = useParams();
  console.log("🚀 ~ UppliveShow3 ~ id:", id);
  const [isPublished, setIsPublished] = useState(false);
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem("user"));
  console.log("🚀 ~ UppliveShow3 ~ temp:", userData);
  const handleCloseName = () => setshowName(false);
  const handleShowName = () => setshowName(true);

  const handleCloseMainMazad = () => setshowMainMazad(false);
  const handleShowMainMazad = () => setshowMainMazad(true);
  const [ProductItem, setProductItem] = useState(null);
  const [Pricebid, setPricebid] = useState("");
  const [TimeBid, setTimeBid] = useState(null);
  const [UpdateBid, setUpdateBid] = useState(null);

  const handleCloseChoose = () => setshowChoose(false);
  const handleShowChoose = (item) => {
    // eslint-disable-next-line
    setshowChoose(true);
    setProductItem(item);
  };

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
  useEffect(() => {
    //  if (res?.ownerId?._id === temp._id) return;

    const timer = setTimeout(() => {
      LeaveRoom();
      window.location.href = "/Congrats";
    }, 1800000); // 30 minutes in milliseconds

    // Cleanup the timer when the component unmounts or dependencies change
    return () => clearTimeout(timer);
  }, [res, temp]);
  const stopBroadcast = async () => {
    // Stop the broadcast
    setIsPublished(false);
    await dispatch(leaveFromEvent(id));
    window.location.href = "/";
  };
  const createaucc = useSelector((state) => state.roomsReducers.createAcu);
  console.log("🚀 ~ UppliveShow3 ~ createaucc:", createaucc);

  const getonewaucion = useSelector((state) => state.roomsReducers.getOneAuc);
  console.log("🚀 ~ UppliveShow3 ~ getonewaucion:", getonewaucion);
  const Updateone = useSelector((state) => state.roomsReducers.updateAuc);
  console.log("🚀 ~ UppliveShow3 ~ Updateone:", Updateone);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getActiveAuction(id));
    }, 10000); // 10000 milliseconds = 10 seconds

    return () => clearTimeout(timer);
  }, [id]);

  const handleSubmit = async () => {
    await dispatch(
      createAuction({
        product: ProductItem._id,
        tokshow: res._id,
        baseprice: Pricebid,
        higestbid: Pricebid,
      })
    );
    handleCloseChoose();
    handleCloseMainMazad();
    handleCloseName();
    setUpdateBid("");

    window.location.reload();
  };
  const handleUpdate = async () => {
    await dispatch(
      updateAuction(getonewaucion?._id, {
        started: true,
        startedTime: getonewaucion?.startedTime,
        higestbid: UpdateBid,
      })
    );
    setUpdateBid("");
    await dispatch(getActiveAuction(id));
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
          {getonewaucion ? (
            <div style={{ textAlign: "initial" }} className="userr">
              Product Name:{" "}
              <span style={{ color: "red" }}>
                {getonewaucion?.product?.name}
              </span>
              <br />
              Product Price Now:{" "}
              <span style={{ color: "red" }}>{getonewaucion?.higestbid}</span>
              <br />
              {res?.ownerId?._id === temp._id ? null : (
                <>
                  <input
                    className="w-100"
                    type="number"
                    value={UpdateBid}
                    onChange={(e) => setUpdateBid(e.target.value)}
                  />
                  <button
                    className="btn btn-info live-btn mt-2 mb-2 w-100"
                    onClick={handleUpdate}
                  >
                    Update Auction{" "}
                  </button>
                </>
              )}
            </div>
          ) : null}
          <div className="content2">
            {/* <img src={eye} alt="seen" className="eye" />
            <span className="n_10">545</span>{" "} */}
            <span
              style={{ cursor: "pointer" }}
              className="leave_txt"
              onClick={LeaveRoom}
            >
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
          <>{/* <Chat res={res} /> */}</>
        ) : null}
        <div className="share_icon">
          <span
            className="share_txt"
            onClick={() => copyUrlToClipboard(res?._id)}
          >
            Share
          </span>
          <img
            src={share}
            alt="share"
            class="shareIcon"
            onClick={() => copyUrlToClipboard(res?._id)}
          />
          {res?.ownerId?._id === temp._id ? (
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
          ) : null}

          {isPublished && (
            <button
              type="button"
              className="btn btn-danger live-btn"
              onClick={stopBroadcast}
            >
              Stop Broadcast
            </button>
          )}
        </div>
      </div>
      <Modal
        show={showName}
        onHide={handleCloseName}
        backdrop="static"
        keyboard={false}
      >
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
                  className="tage"
                >
                  <h6>{productId.name}</h6>
                  <h6>{productId.price}</h6>
                  <i
                    className="fa-solid fa-plus choose"
                    onClick={() => handleShowChoose(productId)}
                  ></i>
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
            onClick={handleCloseName}
          >
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
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <input className="managsearch" type="text" placeholder="أبحث" /> */}
          <div style={{ width: "100%" }} className="maintag">
            <>
              <div
                style={{ width: "100%", position: "relative" }}
                className="tage"
              >
                <button
                  className="btn-login w-100"
                  onClick={handleShowMainMazad}
                >
                  Start Auction
                </button>
                <hr />
                <button
                  className="btn-login  w-100 "
                  onClick={handleCloseChoose}
                >
                  Return To Store
                </button>
              </div>
            </>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            className="close"
            onClick={handleCloseChoose}
          >
            Cancel
          </Button>
          {/* <Button variant="primary" className="edit">
            إختيار
          </Button> */}
        </Modal.Footer>
      </Modal>
      <Modal
        show={showMainMazad}
        onHide={handleCloseMainMazad}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Auction Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <input className="managsearch" type="text" placeholder="أبحث" /> */}
          <div style={{ width: "100%" }} className="maintag">
            <>
              <div
                style={{ width: "100%", position: "relative" }}
                className="tage"
              >
                <h6>Product Name : {ProductItem?.name}</h6>
                <h6>Product Quantity : {ProductItem?.quantity}</h6>

                <input
                  className="inn"
                  type="text"
                  value={Pricebid}
                  onChange={(e) => setPricebid(e.target.value)}
                  placeholder="Initial Bid"
                />
                <br />
                <input
                  className="inn"
                  type="number"
                  value={TimeBid}
                  onChange={(e) => setTimeBid(e.target.value)}
                  placeholder="The Time"
                />
                <button className="btn-login  w-100 " onClick={handleSubmit}>
                  Start Auction
                </button>
              </div>
            </>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            className="close"
            onClick={handleCloseMainMazad}
          >
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
