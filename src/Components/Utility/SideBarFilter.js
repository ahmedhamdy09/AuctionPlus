import React from "react";
import { Row } from "react-bootstrap";
import SideBarSearchHook from "../../HookLogicCode/Search/SideBarSearchHook";

const SideBarFilter = () => {
  const [category, brand, clickCategory,clickBrand] = SideBarSearchHook();
  return (
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
                  <input onChange={clickCategory} type="checkbox" value={item._id} />
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
                  <input onChange={clickBrand} type="checkbox" value={item._id} />
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
  );
};

export default SideBarFilter;
