import React from "react";
import "./Stream.css";
import { FaMicrophone } from "react-icons/fa";
import { Row } from "react-bootstrap";
// import SearchCountResult from "../../Utility/SearchCountResult";
import SideBarSearchHook from "../../../HookLogicCode/Search/SideBarSearchHook";
export default function Stream() {
  const [category, brand, clickCategory, clickBrand, priceFrom, priceTo] =
    SideBarSearchHook();
  let localFrom = localStorage.getItem("priceFrom");
  let localTo = localStorage.getItem("priceTo");
  return (
    <div className="p3" style={{ margin: "25px" }}>
      <div className="cont">
        <div className="head">
          <h3>Live auction offers</h3>
          {/* <SearchCountResult /> */}
        </div>
        <div className="main">
          <div className="mt-3">
            <Row>
              <div className="d-flex flex-column mt-2">
                <div className="filter-title">Category</div>
                <div className="d-flex mt-3">
                  <input onChange={clickCategory} type="checkbox" value="0" />
                  <div className="filter-sub me-2 ">All</div>
                </div>
                {category ? (
                  category.map((item, index) => {
                    return (
                      <div className="d-flex mt-2" key={index}>
                        <input
                          onChange={clickCategory}
                          type="checkbox"
                          value={item._id}
                        />
                        <div className="filter-sub me-2 ">{item.name}</div>
                      </div>
                    );
                  })
                ) : (
                  <h5>No Category Now</h5>
                )}
              </div>

              <div className="d-flex flex-column mt-2">
                <div className="filter-title mt-3">Brand</div>
                <div className="d-flex mt-3">
                  <input onChange={clickBrand} type="checkbox" value="0" />
                  <div className="filter-sub me-2 ">All</div>
                </div>
                {brand ? (
                  brand.map((item, index) => {
                    return (
                      <div className="d-flex mt-2" key={index}>
                        <input
                          onChange={clickBrand}
                          type="checkbox"
                          value={item._id}
                        />
                        <div className="filter-sub me-2 ">{item.name}</div>
                      </div>
                    );
                  })
                ) : (
                  <h5>No Brand Now</h5>
                )}
              </div>

              <div className="filter-title my-3">Price</div>
              <div className="d-flex">
                <p className="filter-sub my-2">From:</p>
                <input
                  value={localFrom}
                  onChange={priceFrom}
                  className="m-2 text-center"
                  type="number"
                  style={{ width: "50px", height: "25px" }}
                />
              </div>
              <div className="d-flex">
                <p className="filter-sub my-2">To:</p>
                <input
                  value={localTo}
                  onChange={priceTo}
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
                href="/uplivefour"
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
