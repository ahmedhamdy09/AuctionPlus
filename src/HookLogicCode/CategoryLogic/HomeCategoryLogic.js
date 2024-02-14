// eslint-disable-next-line
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Actions/CategoryAction";

const HomeCategoryLogic = () => {
  // fetch all catogry
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getAllCategory());
    },
    // eslint-disable-next-line
    []
  );

  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  const colors = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CDFDF",
    "#FF6262",
    "#0034FF",
    "#FFD3E8",
  ];
  return [category, loading, colors];
};

export default HomeCategoryLogic;
