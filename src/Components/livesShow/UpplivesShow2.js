import React from "react";
// import { Col, Row, Container } from "react-bootstrap";
import "./UpplivesShow2.css";

import arrowLeft from "./images/arrow-left-solid.svg";
import chRight from "./images/chevron-right-solid.svg";
import on from "./images/toggle-on-solid.svg";

const UppliveShow2 = () => {
  return (
    <div className="parent">
      <div className="text-back">
        <img src={arrowLeft} alt="backArrow" className="arrow-back" />
        <p className="text-head">Upcoming live shows</p>
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control input1"
          id="exampleFormControlInput1"
          placeholder="the address"
        />
        <div className="arrow ">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Add users (1)"
          />
          <img src={chRight} alt="arrow" />
        </div>

        <div className="arrow">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput3"
            placeholder="product name"
          />
          <img src={chRight} alt="arrow" />
        </div>

        <div className="arrow">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput4"
            placeholder="channel selection"
          />
          <img src={chRight} alt="arrow" />
        </div>

        <div className="arrow">
          <input
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
        <img src={on} alt="on" />
      </div>

      <p className="p_foot">
        Can the audience send messages in a live Tok broadcast?
      </p>

      <div className="btn-foot">
        <button type="button" className="btn btn-info save-btn">
          Save
        </button>
      </div>
    </div>
  );
};

export default UppliveShow2;
