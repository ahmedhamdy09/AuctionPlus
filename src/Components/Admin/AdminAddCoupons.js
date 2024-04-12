import React, { useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddCouponHook from "../../HookLogicCode/Coupons/AddCouponsHook";
import AdminCouponCard from "./AdminCouponCard";
const AdminAddCoupons = () => {
  const dateRef = useRef();
  const [
    couponname,
    coupondate,
    couponValue,
    onChangeCouponName,
    onChangeCouponDate,
    onChangeCouponValue,
    onSubmit,
    coupons,
  ] = AddCouponHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add New Coupon</div>
        <Col sm="8">
          <input
            value={couponname}
            onChange={onChangeCouponName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Coupon Name"
          />
          <input
            ref={dateRef}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Date Expiration"
            value={coupondate}
            onChange={onChangeCouponDate}
            onFocus={() => (dateRef.current.type = "date")}
            onBlur={() => (dateRef.current.type = "text")}
          />
          <input
            value={couponValue}
            onChange={onChangeCouponValue}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Coupon discount percentage"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={onSubmit} className="btn-save d-inline mt-2">
            Save Coupons
          </button>
        </Col>
      </Row>

      <Row>
        <Col sm="8" className="">
          {coupons ? (
            coupons.map((item, index) => {
              return <AdminCouponCard key={index} coupon={item} />;
            })
          ) : (
            <h3>No Coupons Now</h3>
          )}
        </Col>
      </Row>

      <ToastContainer />
    </div>
  );
};

export default AdminAddCoupons;
