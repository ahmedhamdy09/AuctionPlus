import React from "react";
import { Row } from "react-bootstrap";
import AdminAllOrdersItem from "./AdminAllOrdersItem";
import UserGetAllOrderHook from "../../HookLogicCode/User/UserGetAllOrderHook";

const AdminAllOreders = () => {
  // eslint-disable-next-line
  const [userName, result, paginate, orderData] = UserGetAllOrderHook();
  return (
    <div>
      <div className="admin-content-text">Manage all orders</div>
      <Row className="justify-content-start">
        {/* <AdminAllOrdersItem /> */}
        {orderData.length >= 1 ? (
          orderData.map((orderItem, index) => {
            return <AdminAllOrdersItem key={index} orderItem={orderItem} />;
          })
        ) : (
          <h4>No Order Now</h4>
        )}
      </Row>
    </div>
  );
};

export default AdminAllOreders;
