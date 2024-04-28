import React, { useState } from "react";
import "./UpplivesShow2.css";
import arrowLeft from "./images/arrow-left-solid.svg";
import chRight from "./images/chevron-right-solid.svg";
import { Link } from "react-router-dom";
import CreateRooms from "../../HookLogicCode/Rooms/CreateRooms";

const UppliveShow2 = (id) => {
  const [
    addressEvent,
    addUsers,
    productName,
    channelSelection,
    DateLiveBroadCast,
    onChangeAddressEvent,
    onChangeAddUsers,
    onChangeProductName,
    onChangeChannelSelection,
    onChangeDateLiveBroadCast,
    handleSubmit,
  ] = CreateRooms(id);
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = () => {
    setIsChecked((prevIsChecked) => !prevIsChecked);
  };
  return (
    <div className="parent">
      <div className="text-back">
        <Link to="/upliveone">
          <img src={arrowLeft} alt="backArrow" className="arrow-back" />
        </Link>
        <p className="text-head">Upcoming live shows</p>
      </div>
      <div className="mb-3">
        <input
          value={addressEvent}
          onChange={onChangeAddressEvent}
          type="text"
          className="form-control input1"
          id="exampleFormControlInput1"
          placeholder="the address"
        />
        <div className="arrow ">
          <input
            value={addUsers}
            onChange={onChangeAddUsers}
            type="text"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Add users (1)"
          />
          <img src={chRight} alt="arrow" />
        </div>
        <div className="arrow">
          <input
            value={productName}
            onChange={onChangeProductName}
            type="text"
            className="form-control"
            id="exampleFormControlInput3"
            placeholder="product name"
          />
          <img src={chRight} alt="arrow" />
        </div>

        <div className="arrow">
          <input
            value={channelSelection}
            onChange={onChangeChannelSelection}
            type="text"
            className="form-control"
            id="exampleFormControlInput4"
            placeholder="channel selection"
          />
          <img src={chRight} alt="arrow" />
        </div>
        <div className="arrow">
          <input
            value={DateLiveBroadCast}
            onChange={onChangeDateLiveBroadCast}
            type="text"
            className="form-control"
            id="exampleFormControlInput5"
            placeholder="When do you want to start live broadcasting?"
          />
          <img src={chRight} alt="arrow" />
        </div>
      </div>
      <div className="contentE">
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
      <div className="btn-foot">
        <button
          onClick={handleSubmit}
          type="button"
          className="btn btn-info save-btn"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default UppliveShow2;
