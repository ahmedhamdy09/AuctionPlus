import { useEffect, useState } from "react";
// import notify from "../useNotifaction";
import { useDispatch, useSelector } from "react-redux";
import {
  // eslint-disable-next-line
  createReview,
  getallReviewToOneProducts,
} from "../../Redux/Actions/ReviewActions";

const ViewAllReviewHook = (id) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);

  const allReview = useSelector(
    (state) => state.reviewReducer.allReviewProducts
  );

  // if (allReview) console.log(allReview);
  useEffect(
    () => {
      setLoading(true);
      dispatch(getallReviewToOneProducts(id, 1, 5)); // id and page 1 and rate 10
      setLoading(false);
    },
    // eslint-disable-next-line
    []
  );

  //pagination
  const onPress = async (page) => {
    await dispatch(getallReviewToOneProducts(id, page, 5)); // id and page 1 and rate 10
  };

  return [allReview, onPress];
};

export default ViewAllReviewHook;
