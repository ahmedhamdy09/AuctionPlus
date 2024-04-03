import { useEffect, useState } from "react";
import notify from "../useNotifaction";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { createReview } from "../../Redux/Actions/ReviewActions";

const AddRateHookLogic = (id) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [rateText, setRateText] = useState("");
  const [rateValueAVG, setRateValueAVG] = useState(0);
  const [loading, setLoading] = useState(true);

  const onChangeRateText = (e) => {
    setRateText(e.target.value);
  };
  const onChangeRateValueAVG = (value) => {
    setRateValueAVG(value);
  };

  var user = "";
  if (localStorage.getItem("user") != null)
    user = JSON.parse(localStorage.getItem("user"));

  // when save rate
  const onSubmit = async () => {
    if (rateText === "") {
      notify("please insert your review", "error");
      return;
    }
    setLoading(true);
    await dispatch(
      createReview(id, {
        title: rateText,
        ratings: rateValueAVG,
      })
    );
    setLoading(false);
  };
  const res = useSelector((state) => state.reviewReducer.createReview);

  useEffect(
    () => {
      if (loading === false) {
        if (res) {
          console.log(res);
          if (res.status && res.status === 403) {
            notify("Admins are not allowed to rate", "error");
          } else if (
            res.data.errors &&
            res.data.errors[0].msg === "Ratings value must be between 1 to 5"
          ) {
            notify("You Will Add Rate For This products Previously", "error");
          } else if (res.status && res.status === 201) {
            notify("Comment added successfully", "success");
            setTimeout(() => {
              window.location.reload(false);
            }, 1000);
          }
        }
      }
    },
    // eslint-disable-next-line
    [loading]
  );
  return [
    onChangeRateText,
    onChangeRateValueAVG,
    rateText,
    rateValueAVG,
    user,
    onSubmit,
  ];
};

export default AddRateHookLogic;
