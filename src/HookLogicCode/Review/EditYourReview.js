import { useEffect, useState } from "react";
import notify from "../useNotifaction";
import { useDispatch, useSelector } from "react-redux";
import { updateRate } from "../../Redux/Actions/ReviewActions";

const EditYourCommentHook = (review) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [newRateText, setNewRateText] = useState(review.title);
  const [newRateValue, setNewRateValue] = useState(review.ratings);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const onChangeNewRateText = (e) => {
    setNewRateText(e.target.value);
  };

  const onChangeRateValueAVG = (val) => {
    setNewRateValue(val);
  };

  const handleEdit = async () => {
    setLoading(true);
    await dispatch(
      updateRate(review._id, {
        title: newRateText,
        ratings: newRateValue,
      })
    );
    setLoading(false);
    handleCloseEdit();
  };

  const res = useSelector((state) => state.reviewReducer.updateReview);
  
  useEffect(
    () => {
      if (loading === false) {
        console.log(res);
        if (res.status && res.status === 200) {
          notify("The Comment Was Updated", "success");
          setTimeout(() => {
            window.location.reload(false);
          }, 1000);
        } else notify("The Comment Not Updated", "error");
      }
    },
    // eslint-disable-next-line
    [loading]
  );

  return [
    showEdit,
    handleCloseEdit,
    handleShowEdit,
    handleEdit,
    onChangeNewRateText,
    newRateText,
    onChangeRateValueAVG,
    newRateValue,
  ];
};

export default EditYourCommentHook;
