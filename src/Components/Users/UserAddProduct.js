import React from "react";
import { Row, Col } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import add from "../../assets/add.png";
import MultiImageInput from "react-multiple-image-input";
import { CompactPicker } from "react-color";
import { ToastContainer } from "react-toastify";
import AddProductsHook from "../../HookLogicCode/ProductsLogicHook/AddProductsHook";

const UserAddProducts = () => {
  const [
    onChangeProductName,
    onChangeDescritpionName,
    onChangePriceBefore,
    onChangePriceAfter,
    onChangeQuantity,
    onChangeShowColor,
    prodName,
    prodDescritpion,
    priceBefore,
    priceAfter,
    quantity,
    showColor,
    colors,
    category,
    brand,
    images,
    crop,
    options,
    setImages,
    onSelect,
    onRemove,
    handleChangeComplete,
    removeColor,
    onSelectCategory,
    onSelectBrand,
    handleSubmit,
  ] = AddProductsHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add New Products</div>
        <Col sm="8">
          <div className="text-form pb-2">Products Image</div>
          <MultiImageInput
            images={images}
            setImages={setImages}
            cropConfig={{ crop, ruleOfThirds: true }}
            theme={"light"}
            max={4}
          />
          <input
            value={prodName}
            onChange={onChangeProductName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Product Name"
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="Product Description"
            value={prodDescritpion}
            onChange={onChangeDescritpionName}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Price before discount"
            value={priceBefore}
            onChange={onChangePriceBefore}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Price after discount"
            value={priceAfter}
            onChange={onChangePriceAfter}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Quantity available"
            value={quantity}
            onChange={onChangeQuantity}
          />
          <select
            name="category"
            onChange={onSelectCategory}
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">Main Category</option>

            {category.data
              ? category.data.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>

          {/* <Multiselect
            className="mt-2 text-end"
            placeholder="SubCategory"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: "red" }}
          /> */}
          {Array.isArray(options) && (
            <Multiselect
              className="mt-2 text-end"
              placeholder="SubCategory"
              options={options}
              onSelect={onSelect}
              onRemove={onRemove}
              displayValue="name"
              style={{ color: "red" }}
            />
          )}

          <select
            onChange={onSelectBrand}
            name="brand"
            id="brand"
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">Choose Brand</option>
            {brand && brand.data
              ? brand.data.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
          <div className="text-form mt-3 ">Available colors of the product</div>
          <div className="mt-1 d-flex">
            {colors.length >= 1
              ? colors.map((color, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => removeColor(color)}
                      className="color ms-2 border  mt-1"
                      style={{ backgroundColor: color }}
                    ></div>
                  );
                })
              : null}

            <img
              onClick={onChangeShowColor}
              src={add}
              alt=""
              width="30px"
              height="35px"
              style={{ cursor: "pointer" }}
            />
            {showColor === true ? (
              <CompactPicker onChangeComplete={handleChangeComplete} />
            ) : null}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
            {" "}
            Save modifications
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default UserAddProducts;
