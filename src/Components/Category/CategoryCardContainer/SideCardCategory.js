import React from "react";
import "./Card.css";
import media3 from "./images/media3.png";
const SideCardCategory = () => {
  return (
    <div className="con-cards">
      <div className="card-1st">
        <p className="p-1">Your Space</p>
        <h3>Unique Life</h3>
        <p className="p-2">Top Ten Products of the Week</p>
        <p className="p-3">Explore Items</p>
      </div>

      <div className="card-2st">
        <p className="p-1">Ends Today</p>
        <h3>
          Elements Of <br /> Style
        </h3>
        <p className="p-2">
          Top Ten Products of the <br /> Week
        </p>
        <p className="p-3">Explore Items</p>
      </div>

      <div className="card-3st">
        <div className="item-con">
          <p className="p-1">Ends Today</p>
          <h3>Unique Life</h3>
          <p className="p-2">Top Ten Products of the Week</p>
          <p className="p-3">Explore Items</p>
        </div>
        <div className="img-con">
          <img src={media3} alt="mobile" />
        </div>
      </div>
    </div>
  );
};

export default SideCardCategory;
