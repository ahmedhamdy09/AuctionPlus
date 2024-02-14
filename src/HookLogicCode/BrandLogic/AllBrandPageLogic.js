// eslint-disable-next-line
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line
import baseURL from "../../Api/baseURL";
import { getAllBrand, getAllBrandPage } from "../../Redux/Actions/BrandAction";
const AllBrandPageLogic = () => {
  const dispatch = useDispatch();
  //when first load
  useEffect(() => {
    dispatch(getAllBrand(6));
    // eslint-disable-next-line
  }, []);
  //to get state from redux
  const brand = useSelector((state) => state.allBrand.brand);
  const loading = useSelector((state) => state.allBrand.loading);
  console.log(loading);

  // solve error number of pages use if condition
  //to get page count
  let pageCount = 0;
  if (brand.paginationResult) {
    pageCount = brand.paginationResult.numberOfPages;
  }
  //when press pagination
  const getPage = (page) => {
    dispatch(getAllBrandPage(page));
    console.log(page);
  };

  return [brand, loading, pageCount, getPage];
};

export default AllBrandPageLogic;
