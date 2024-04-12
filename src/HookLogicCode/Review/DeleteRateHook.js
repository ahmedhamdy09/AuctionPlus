import { useEffect, useState } from "react";
import notify from "../useNotifaction";
import { useDispatch, useSelector } from "react-redux";
import { deleteReviewOneProducts } from "../../Redux/Actions/ReviewActions";

const DeleteRateHook = (review) => {
  //
  const dispatch = useDispatch();
  const [isUser, setIsUser] = useState(false);
  const [loading, setLoading] = useState(true);

  const [showDelete, setShowDelete] = useState(false);
  const handleClose = () => setShowDelete(false);
  const handleShow = () => setShowDelete(true);

  // all user data
  let user = JSON.parse(localStorage.getItem("user"));
  useEffect(
    () => {
      try {
        if (user && review.user._id === user._id) {
          setIsUser(true);
        }
      } catch (e) {}
    },
    // eslint-disable-next-line
    []
  );

  const handleDelete = async () => {
    setLoading(true);
    // console.log(review);
    await dispatch(deleteReviewOneProducts(review._id));
    setLoading(false);
    handleClose();
  };

  const res = useSelector((state) => state.reviewReducer.deleteReview);
  // console.log(res);
  useEffect(
    () => {
      if (loading === false) {
        if (res && res === "") {
          if (res.status && res.status === 200) {
            notify("The Comment Is Deleted", "success");
            setTimeout(() => {
              window.location.reload(false);
            }, 1000);
          }
        } else notify("The Comment Not Deleted", "error");
      }
    },
    // eslint-disable-next-line
    [loading]
  );

  return [isUser, handleDelete, handleShow, handleClose, showDelete];
};

export default DeleteRateHook;

