import React from "react";
// import { Col, Row, Container } from "react-bootstrap";
import "./UpplivesShow1.css";
import arrowLeft from "./images/arrow-left-solid.svg";
import celender from "./images/calendar-plus-regular.svg";
import userImg from "./images/user-regular.svg";
import recored from "./images/microphone-solid.svg";
import bell from "./images/bell-regular.svg";
import share from "./images/arrow-up-from-bracket-solid.svg";
import { Link } from "react-router-dom";
// import AgoraRTC from 'agora-rtc-sdk';

const UppliveShow1 = () => {
  return (
    <div className="parentss">
      <div className="containers">
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <div className="text-back">
            <img src={arrowLeft} alt="backArrow" className="arrow-back" />
            <p className="text">Upcoming live shows</p>
          </div>
        </Link>
        <Link to={"/uplivetwo"}>
          <div className="scheduleIcon">
            <img
              src={celender}
              alt="schedule"
              className="schedule"
              style={{ cursor: "pointer" }}
            />
          </div>
        </Link>
      </div>

      <div className="sec">
        <div className="p-3 text-dark-emphasis bg-secondary-subtle border border-dark-subtle rounded-3 con">
          <div className="con1">
            <div className="img">
              <img src={userImg} alt="user" class="user-img" />
            </div>
            <div className="info">
              <p>Eslam Nasr</p>
              <span>Host</span>
            </div>
          </div>
          <div className="micro">
            <img src={recored} className="recored-icon" alt="recored" />
          </div>
        </div>

        <div className="para3">
          <p className="p1">LOREAM TEXT</p>
          <p className="p2">Tomorrow, 12:00 AM</p>
          <p className="p3">
            Waiting room~ <span>Eslam Nasr, acn ,</span>
          </p>

          <div className="buttonss">
            <Link to={"/uplivethree"}>
              <button type="button" className="btn btn-info">
                Join Now
              </button>
            </Link>

            <button type="button" className="btn btn-secondary remind-btn">
              <img src={bell} alt="reminder Me" />
              let Me Know
            </button>

            <button type="button" className="btn btn-light invite-btn">
              <span>Invite Friends</span>
              <img src={share} alt="share" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UppliveShow1;
