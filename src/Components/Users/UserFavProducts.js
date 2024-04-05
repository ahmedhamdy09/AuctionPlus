import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "react-bootstrap";
// import Pagination from "../Utility/Pagination";
import CardProductsContainer from "../Products/CardProductsContainer";
import { getProductsWishLists } from "../../Redux/Actions/WishListActions";

const UserFavProducts = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(
    () => {
      const get = async () => {
        setLoading(true);
        await dispatch(getProductsWishLists());
        setLoading(false);
      };
      get();
    },
    // eslint-disable-next-line
    []
  );

  const res = useSelector((state) => state.addToWishlistReducer.userWishlist);

  useEffect(
     () => {
      if (loading === false) {
        if (res) {
          setItems(res.data);
        }
      }
    },
    // eslint-disable-next-line
    [loading]
  );
  return (
    <div>
      <div className="admin-content-text pb-4">Favourite Lists</div>
      <Row className="justify-content-start">
        {items.length > 0 ? (
          <CardProductsContainer products={items} title="" btntitle="" />
        ) : (
          <h2>No Favourite Product Now..</h2>
        )}
      </Row>
      {/* <Pagination /> */}
    </div>
  );
};

export default UserFavProducts;
