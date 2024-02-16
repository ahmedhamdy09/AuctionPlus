import React from "react";
// import { MdOutlineSort } from "react-icons/md";
import "./Stream.css";

import { FaMicrophone } from "react-icons/fa";
import { Row } from "react-bootstrap";
import SearchCountResult from "../../Utility/SearchCountResult";
export default function Stream() {
  return (
    <div className="p3" style={{ margin: "25px" }}>
      <div className="cont">
        <div className="head">
          <h3>Live auction offers</h3>
          {/* <p>
            <MdOutlineSort />
            Sort By
          </p> */}
          <SearchCountResult />
        </div>
        <div className="main">
          <div className="mt-3">
            <Row>
              <div className="d-flex flex-column mt-2">
                <div className="filter-title">Category</div>
                <div className="d-flex mt-3">
                  <input type="checkbox" value="" />
                  <div className="filter-sub me-2 ">All</div>
                </div>
                <div className="d-flex mt-2">
                  <input type="checkbox" value="" />
                  <div className="filter-sub me-2 ">household appliance</div>
                </div>
                <div className="d-flex mt-2">
                  <input type="checkbox" value="" />
                  <div className="filter-sub me-2 ">household appliance</div>
                </div>
                <div className="d-flex mt-2">
                  <input type="checkbox" value="" />
                  <div className="filter-sub me-2 ">household appliance</div>
                </div>
                <div className="d-flex mt-2">
                  <input type="checkbox" value="" />
                  <div className="filter-sub me-2 ">household appliance</div>
                </div>
              </div>

              <div className="d-flex flex-column mt-2">
                <div className="filter-title mt-3">Brand</div>
                <div className="d-flex mt-3">
                  <input type="checkbox" value="" />
                  <div className="filter-sub me-2 ">All</div>
                </div>
                <div className="d-flex mt-2">
                  <input type="checkbox" value="" />
                  <div className="filter-sub me-2 ">Apple</div>
                </div>
                <div className="d-flex mt-2">
                  <input type="checkbox" value="" />
                  <div className="filter-sub me-2 ">Samsung</div>
                </div>
              </div>

              <div className="filter-title my-3">Price</div>
              <div className="d-flex">
                <p className="filter-sub my-2">From:</p>
                <input
                  className="m-2 text-center"
                  type="number"
                  style={{ width: "50px", height: "25px" }}
                />
              </div>
              <div className="d-flex">
                <p className="filter-sub my-2">To:</p>
                <input
                  className="m-2 text-center"
                  type="number"
                  style={{ width: "50px", height: "25px" }}
                />
              </div>
            </Row>
          </div>
          <div className="content">
            <div className="box">
              <h3>There are no live shows at the moment</h3>
              <FaMicrophone className="mic" />
              <a
                href="/liveshow"
                alt="live"
                className=""
                style={{ textDecoration: "none" }}
              >
                <h4>Start live streaming now</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
