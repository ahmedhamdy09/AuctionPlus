import { combineReducers } from "redux";
import categoryReducer from "./CategoryReducer";
import BrandReducer from "./BrandReducer";
import subCategoryReducer from "./SubCategpryReducer";
import productsReducer from "./ProductsReducer";
import authReducer from "./AuthReducers";
import reviewReducer from "./ReviewReducers";
import addToWishlistReducer from "./WishListReducres";

export default combineReducers({
  allCategory: categoryReducer,
  allBrand: BrandReducer,
  subCategory: subCategoryReducer,
  allproducts: productsReducer,
  authReducer: authReducer,
  reviewReducer:reviewReducer,
  addToWishlistReducer: addToWishlistReducer,
});
