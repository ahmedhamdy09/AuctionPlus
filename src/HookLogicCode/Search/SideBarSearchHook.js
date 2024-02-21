import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Actions/CategoryAction";
import { getAllBrand } from "../../Redux/Actions/BrandAction";

const SideBarSearchHook = () => {
  const dispatch = useDispatch();
  //when first load
  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    };
    get();
  }, [dispatch]);
  //to get state from redux
  const allCategorySideBarSearch = useSelector(
    (state) => state.allCategory.category
  );
  const allbrandSideBarSearch = useSelector((state) => state.allBrand.brand);

  //to get brand sidebar search
  let category = [];
  if (allCategorySideBarSearch.data) {
    category = allCategorySideBarSearch.data;
  }

  //to get category sidebar search
  let brand = [];
  if (allbrandSideBarSearch.data) {
    brand = allbrandSideBarSearch.data;
  }

  // when user press ant category
  const clickCategory = (e) => {
    console.log(e.target.value);
  };
  return [category, brand ,clickCategory];
};

export default SideBarSearchHook;
