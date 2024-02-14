// eslint-disable-next-line
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line
import baseURL from "../../Api/baseURL";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../Redux/Actions/CategoryAction";

const AllCatogoryPageLogic = () => {
  const dispatch = useDispatch();
  //when first load
  useEffect(() => {
    dispatch(getAllCategory(6));
  }, [dispatch]);
  //to get state from redux
  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  console.log(loading);

  // solve error number of pages use if condition
  //to get page count
  let pageCount = 0;
  if (category.paginationResult) {
    pageCount = category.paginationResult.numberOfPages;
  }
  //when press pagination
  const getPage = (page) => {
    dispatch(getAllCategoryPage(page));
    console.log(page);
  };

  return [category, loading, pageCount, getPage];
};

export default AllCatogoryPageLogic;
