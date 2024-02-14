import { combineReducers } from "redux";
import categoryReducer from "./CategoryReducer";
import BrandReducer from "./BrandReducer";
import subCategoryReducer from "./SubCategpryReducer";
import productsReducer from "./ProductsReducer";

export default combineReducers({
  allCategory: categoryReducer,
  allBrand: BrandReducer,
  subCategory: subCategoryReducer,
  allproducts: productsReducer,
});
