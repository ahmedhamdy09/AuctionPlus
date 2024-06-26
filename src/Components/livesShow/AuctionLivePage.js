import React, { useEffect, useState } from "react";
import "./AuctionLivePage.css";
import fluentLive from "./images/fluent_live-24-filled.png";
import { Container, Modal } from "react-bootstrap";
import arror from "./images/feArrowDown1.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllActiveEvents,
  updateRoomAction,
} from "../../Redux/Actions/RoomsAction";
const AuctionLivePage = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const temp = JSON.parse(localStorage.getItem("user"));
  console.log("🚀 ~ CreateRooms ~ temp:", temp);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const goPageOption1 = () => {
    navigate("/uplivefour");
  };

  const goPageOption2 = () => {
    navigate("/uplivetwo");
  };
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
  console.log("🚀 ~ AuctionLivePage ~ res:", res);
  useEffect(() => {
    dispatch(getAllActiveEvents());
  }, []);
  console.log("🚀 ~ AuctionLivePage ~ res:", res);

  return (
    <Container>
      <div className="fullPageAuction">
        <div className="fluentlive">
          <img src={fluentLive} className="searchBid" alt="searchBid" />
          <h2>Live auction area</h2>
        </div>
        <hr className="divider" />
        <div className="chh3">
          <div className="contAuction">
            <h3 className="livesMeet">Live Now</h3>
            <div className="livenow">
              {res &&
                res.rooms
                  ?.map((user) => (
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
                  ))
                  .slice(0, 5)}
                  
              {res && res.rooms && (
                <Link to={"/uplivefive"}>
                  <div className="userr">More</div>
                </Link>
              )}

            </div>
            <br />
          </div>
          <Link to={"/upliveone"}>
            <button className="viewShow" alt="show">
              View Shows
            </button>
          </Link>
        </div>
        <hr className="divider" />
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body onClick={goPageOption1}>
          Start live streaming now{" "}
          <img
            src={arror}
            style={{ width: "15px", height: "15px", objectFit: "cover" }}
            alt="hh"
          />
        </Modal.Body>
        <hr />
        <Modal.Body onClick={goPageOption2}>
          Schedule a live show{" "}
          <img
            src={arror}
            style={{ width: "15px", height: "15px", objectFit: "cover" }}
            alt="hh"
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AuctionLivePage;
