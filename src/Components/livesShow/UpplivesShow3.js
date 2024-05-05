import React, { useState } from "react";
import "./UpplivesShow3.css";
import userImg from "./images/user-regular.svg";
import star from "./images/star-solid.svg";
import eye from "./images/eye-regular.svg";
import share from "./images/arrow-up-from-bracket-solid.svg";
import { VideoRoom } from "./VideoTest/VideoRoom";

const UppliveShow3 = () => {
  // const [joined, setJoined] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  // const startBroadcast = () => {
  //   // Start the broadcast
  //   // setJoined(true);
  //   setIsPublished(true);
  // };

  const stopBroadcast = () => {
    // Stop the broadcast
    setIsPublished(false);
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
              <p className="u_name">Ahmed Hamdy</p>
              <div style={{ display: "flex" }}>
                <span className="r_num">0.0</span>
                <span>
                  <img src={star} alt="rate" className="star" />
                </span>
                <button type="button" class="btn btn-info follow-btn">
                  Follow
                </button>
              </div>
              <br />
              <div style={{ display: "flex", marginTop: "-30px" }}>
                <span className="num">96K</span>{" "}
                <span className="follow">Followers</span>
              </div>
            </div>
          </div>
          <div className="content2">
            <img src={eye} alt="seen" className="eye" />
            <span className="n_10">10</span>{" "}
            <span className="leave_txt">Leave</span>
          </div>
        </div>

        <div className="main_comp">
          <p className="p1">Wait for the host to start th show</p>
          <p className="p2">Tomorrow, 12:00 AM</p>
        </div>
      </div>
      {<VideoRoom className="video-container" />}
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
              onClick={stopBroadcast}
            >
              Stop Broadcast
            </button>
          )}
        </div>
        {/* {!joined && (
          <button
            type="button"
            className="btn btn-info live-btn"
            onClick={() => setJoined(true)}
          >
            Join Now
          </button>
        )} */}
      </div>
    </>
  );
};

export default UppliveShow3;
