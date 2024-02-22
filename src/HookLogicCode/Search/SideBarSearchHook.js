import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Actions/CategoryAction";
import { getAllBrand } from "../../Redux/Actions/BrandAction";
import ViewSearchProducts from "../ProductsLogicHook/ViewSearchProducts";

const SideBarSearchHook = () => {
  // eslint-disable-next-line
  const [items, Paginations, onPress, getProduct, results] =
    ViewSearchProducts();
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

  // array to query string for category
  var queryCategory = "";
  var queryBrand = "";
  //store id category in state
  const [categoryCheckBox, setCategoryCheckBox] = useState([]);
  // when user press any category
  const clickCategory = (e) => {
    let value = e.target.value;
    if (value === "0") {
      // getQueryStringCategory();
      setCategoryCheckBox([]);
    } else {
      if (e.target.checked === true) {
        // getQueryStringCategory();
        setCategoryCheckBox([...categoryCheckBox, value]);
      } else if (e.target.checked === false) {
        const newArr = categoryCheckBox.filter((e) => e !== value);
        // getQueryStringCategory();
        setCategoryCheckBox(newArr);
      }
    }
  };
  // array to query string for category
  useEffect(() => {
    // eslint-disable-next-line
    queryCategory = categoryCheckBox
      .map((vale) => "category[in][]=" + vale)
      .join("&");
    localStorage.setItem("categoryCheckBox", queryCategory);
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [categoryCheckBox]);

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

  // array to query string for brand
  useEffect(() => {
    // eslint-disable-next-line
    queryBrand = brandCheckBox.map((vale) => "brand[in][]=" + vale).join("&");
    localStorage.setItem("brandCheckBox", queryBrand);
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [brandCheckBox]);

  const [prFrom, setPriceFrom] = useState(0);
  const [prTo, setPriceTo] = useState(0);

  //price
  const priceFrom = (e) => {
    localStorage.setItem("priceFrom", e.target.value);
    setPriceFrom(e.target.value);
  };

  const priceTo = (e) => {
    localStorage.setItem("priceTo", e.target.value);
    setPriceTo(e.target.value);
  };

  useEffect(
    () => {
      setTimeout(() => {
        getProduct();
      }, 1000);
    },
    // eslint-disable-next-line
    [prFrom, prTo]
  );
  return [category, brand, clickCategory, clickBrand, priceFrom, priceTo];
};

export default SideBarSearchHook;
