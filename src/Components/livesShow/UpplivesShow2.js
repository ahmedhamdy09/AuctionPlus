import React, { useState } from "react";
import "./UpplivesShow2.css";
import arrowLeft from "./images/arrow-left-solid.svg";
import chRight from "./images/chevron-right-solid.svg";
import { Link } from "react-router-dom";
import CreateRooms from "../../HookLogicCode/Rooms/CreateRooms";
import GetLoggedUserHook from "../../HookLogicCode/Rooms/GetLoggedUser";
import AllCatogoryPageLogic from "../../HookLogicCode/CategoryLogic/AllCatogoryPageLogic";
import Multiselect from "multiselect-react-dropdown";
import { ToastContainer } from "react-toastify";

const UppliveShow2 = () => {
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
    onRemoveUser,
    onSelectUser,
    resLoggedUser,
    AllProducts,
    onSelectProduct,
    onRemoveProduct,
    isChecked,
    setIsChecked,
    handleChange,
    setDescription,
    Description
  ] = CreateRooms();

  // eslint-disable-next-line
  // const [resLoggedUser] = GetLoggedUserHook();

  // eslint-disable-next-line
  const [category, loading, pageCount, getPage] = AllCatogoryPageLogic();

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
              <input
          value={Description}
          onChange={(e)=>setDescription(e.target.value)}
          type="text"
          className="form-control input1"
          id="exampleFormControlInput1"
            placeholder="Description"
        />
        <div className="arrow ">
          <Multiselect
            options={resLoggedUser && resLoggedUser.data} // Options to display in the dropdown
            selectedValues={resLoggedUser && resLoggedUser.data?._id} // Preselected value to persist in dropdown
            onSelect={onSelectUser} // Function will trigger on select event
            onRemove={onRemoveUser} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
            placeholder="select users"
          />

          <img src={chRight} alt="arrow" />
        </div>

        <div className="arrow">
          <Multiselect
            options={AllProducts && AllProducts.data} // Options to display in the dropdown
            selectedValues={AllProducts && AllProducts.data?._id} // Preselected value to persist in dropdown
            onSelect={onSelectProduct} // Function will trigger on select event
            onRemove={onRemoveProduct} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
              placeholder="select products"
          />

          <img src={chRight} alt="arrow" />
        </div>

        {/* <div className="arrow">
          <input
            value={channelSelection}
            onChange={onChangeChannelSelection}
            type="text"
            className="form-control"
            id="exampleFormControlInput4"
            placeholder="channel selection"
          />
          <img src={chRight} alt="arrow" />
        </div> */}
        <div className="arrow">
          <input
            value={DateLiveBroadCast}
            onChange={onChangeDateLiveBroadCast}
            type="datetime-local"
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
          className="btn btn-info save-btn">
          Save
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UppliveShow2;
