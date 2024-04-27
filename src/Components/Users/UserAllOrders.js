import React from "react";
import { Row } from "react-bootstrap";
import UsersOrderItems from "./UsersOrderItems";
import UserGetAllOrderHook from "../../HookLogicCode/User/UserGetAllOrderHook";
// import Pagination from "../Utility/Pagination";

const UserAllOrders = () => {
  // eslint-disable-next-line
  const [userName, result, paginate, orderData] =
    UserGetAllOrderHook();

  // console.log(paginate);
  return (
    <div>
      <div className="admin-content-text pb-4">Welcome...{userName}</div>
      <div className="admin-content-text pb-4">Number Of Order = {result}</div>

      <Row className="justify-content-between">
        {orderData.length >= 1 ? (
          orderData.map((orderItem, index) => {
            return <UsersOrderItems key={index} orderItem={orderItem} />;
          })
        ) : (
          <h4>No Order Now</h4>
        )}

        {/* {paginate.numberOfPages >= 2 ? (
          <Pagination
            onPress={onPress}
            pageCount={paginate.numberOfPages ? paginate.numberOfPages : 0}
          />
        ) : null} */}
        {/* <Pagination
          onPress={onPress}
          pageCount={paginate.numberOfPages ? paginate.numberOfPages : 0}
        /> */}
      </Row>
    </div>
  );
};

export default UserAllOrders;
