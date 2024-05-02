import React, { useState } from "react";
import "./UpplivesShow4.css";
import chRight from "./images/chevron-right-solid.svg";
import clock from "./images/clock-solid.svg";

const UppliveShow4 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prevIsChecked) => !prevIsChecked);
  };

  return (
    <div className="parent">
      <p className="intro-txt" style={{ justifyContent: "initial" }}>
        Direct talk name
      </p>
      <p className="sub_p" style={{ justifyContent: "initial" }}>
        What do you want to talk about?
      </p>
      <input type="text" className="form-control mb-3 inp" />
      <button type="button" className="btn btn-outline-info pro-btn">
        Tag Products
      </button>

      <div className="channel-section">
        <div className="channel">Channel selection</div>
        <div className="arrow">
          <img src={chRight} alt="arrow" />
        </div>
      </div>
      <p className="sub_p">Select the channel for live broadcast</p>

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

      <div className="time">
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
      </div>

      <div className="live">
        <button type="button" className="btn btn-info live-btn">
          Live broadcast
        </button>
      </div>
    </div>
  );
};

export default UppliveShow4;
