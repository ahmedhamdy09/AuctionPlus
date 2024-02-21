import React from "react";
import UnopDropdown from "unop-react-dropdown";
import sort from "../../assets/sort.png";
const SearchCountResult = ({ title, onClick }) => {
  const handler = () => {};
  const clickMe = (key) => {
    localStorage.setItem("sortType", key);
    onClick();
  };
  return (
    <div className="d-flex justify-content-between pt-3 px-2">
      <div className="sub-tile">{title}</div>
      <div className="search-count-text d-flex ">
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <p className="mx-1">
              <img
                width="20px"
                height="20px"
                className="ms-1"
                src={sort}
                alt=""
              />
              sort by
            </p>
          }
          delay={0}
          align="CENTER"
          hover
        >
          <div className="card-filter">
            <div
              onClick={() => clickMe("")}
              className="border-bottom card-filter-item"
            >
              no order
            </div>
            <div
              onClick={() => clickMe("Best Seller")}
              className="border-bottom card-filter-item"
            >
              Best Seller
            </div>
            <div
              onClick={() => clickMe("Highest rated")}
              className="border-bottom card-filter-item"
            >
              Highest rated
            </div>
            <div
              onClick={() => clickMe("Price from lowest to highest")}
              className="border-bottom card-filter-item"
            >
              Price from lowest to highest
            </div>
            <div
              onClick={() => clickMe("Price from highest to lowest")}
              className=" card-filter-item"
            >
              Price from highest to lowest
            </div>
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchCountResult;
