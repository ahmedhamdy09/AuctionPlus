import React from "react";
import { MdOutlineSort } from "react-icons/md";
import "./Stream.css";

import { FaMicrophone } from "react-icons/fa";
export default function Stream() {
  return (
    <div className="p3">
      <div className="cont">
        <div className="head">
          <h3>Live auction offers</h3>
          <p>
            <MdOutlineSort />
            Sort By
          </p>
        </div>
        <div className="main">
          <div className="aside">
            <div className="cat">
              <h5>Category</h5>
              <div>
                <input type="radio" id="All" name="fav_language" value="All" />
                <label for="All">All </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Appliances"
                  name="fav_language"
                  value="Appliances"
                />
                <label for="Appliances">Appliances</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Appliances"
                  name="fav_language"
                  value="Appliances"
                />
                <label for="Appliances">Appliances</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Appliances"
                  name="fav_language"
                  value="Appliances"
                />
                <label for="Appliances">Appliances</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Appliances"
                  name="fav_language"
                  value="Appliances"
                />
                <label for="Appliances">Appliances</label>
              </div>
            </div>
            <div className="brand">
              <h5>The brand</h5>
              <div>
                <input type="radio" id="All" name="fav_language" value="All" />
                <label for="All">All </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Apple"
                  name="fav_language"
                  value="Apple"
                />
                <label for="Apple">Apple</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Samsung"
                  name="fav_language"
                  value="Samsung"
                />
                <label for="Samsung">Samsung</label>
              </div>
            </div>
            <div className="price">
              <h5>The price</h5>
              <div>
                <label>From </label>
                <button>0</button>
              </div>
              <div>
                <label>To </label>
                <button>1000</button>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="box">
              <h3>There are no live shows at the moment</h3>
              <FaMicrophone className="mic" />
              <h4>Start live streaming now</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
