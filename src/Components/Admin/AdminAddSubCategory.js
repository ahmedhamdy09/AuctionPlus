import React from "react";
import { Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddSubCategoryHook from "../../HookLogicCode/SubCategoryLogic/AddSubCategoryHook";

const AdminAddSubCategory = () => {
  const [
    // eslint-disable-next-line
    id,
    name,
    // eslint-disable-next-line
    loading,
    category,
    // eslint-disable-next-line
    subcategory,
    handleChange,
    handleSubmit,
    onChangeName,
  ] = AddSubCategoryHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add a new subcategory</div>
        <Col sm="8">
          <input
            value={name}
            onChange={onChangeName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Subcategory name"
          />
          <select
            name="category"
            id="cate"
            className="select mt-3 px-2 "
            onChange={handleChange}
          >
            <option value="0">Choose Category</option>
            {category.data
              ? category.data.map((item) => {
                  return (
                    <option value={item._id} key={item._id}>
                      {item.name}{" "}
                    </option>
                  );
                })
              : null}
          </select>
        </Col>
      </Row>

      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2">
            {" "}
            Save modifications
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminAddSubCategory;
