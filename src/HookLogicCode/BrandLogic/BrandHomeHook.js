import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from "../../Redux/Actions/BrandAction";
const BrandHomeHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrand(5));
    // eslint-disable-next-line
  }, []);

  // get last brand from redux
  // brand reducer in root reducer file
  const brand = useSelector((state) => state.allBrand.brand);
  // console.log(brand);
  // get last loading state from redux
  const loading = useSelector((state) => state.allBrand.loading);
  // console.log(loading);

  return [brand, loading];
};

export default BrandHomeHook;
