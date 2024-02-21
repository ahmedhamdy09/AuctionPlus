import { useEffect, useState } from "react";
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

  //store id category in state
  const [categoryCheckBox, setCategoryCheckBox] = useState([]);
  // when user press any category
  const clickCategory = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setCategoryCheckBox([]);
    } else {
      if (e.target.checked === true) {
        setCategoryCheckBox([...categoryCheckBox, value]);
      } else if (e.target.checked === false) {
        const newArr = categoryCheckBox.filter((e) => e !== value);
        setCategoryCheckBox(newArr);
      }
    }
  };

  // brand filter
  //store id category in state
  const [brandCheckBox, setBrandCheckBox] = useState([]);
  // when user press any brand
  const clickBrand = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setBrandCheckBox([]);
    } else {
      if (e.target.checked === true) {
        setBrandCheckBox([...brandCheckBox, value]);
      } else if (e.target.checked === false) {
        const newArr = brandCheckBox.filter((e) => e !== value);
        setBrandCheckBox(newArr);
      }
    }
  };
  return [category, brand, clickCategory ,clickBrand];
};

export default SideBarSearchHook;
