import { combineReducers } from "redux";
import categoryReducer from "./CategoryReducer";
import BrandReducer from "./BrandReducer";
import subCategoryReducer from "./SubCategpryReducer";
import productsReducer from "./ProductsReducer";
import authReducer from "./AuthReducers";
import reviewReducer from "./ReviewReducers";
import addToWishlistReducer from "./WishListReducres";
import couponReducer from "./CouponReducer";
import userAddressReducer from "./AddressReducer";
import addProductToCart from "./CartReducers";
import cashOrderReducers from "./CheckOutReducres";
import orderReducers from "./OrderReducers";
import roomsReducers from "./RoomsReducrs";
export default combineReducers({
  allCategory: categoryReducer,
  allBrand: BrandReducer,
  subCategory: subCategoryReducer,
  allproducts: productsReducer,
  authReducer: authReducer,
  reviewReducer: reviewReducer,
  addToWishlistReducer: addToWishlistReducer,
  couponReducer: couponReducer,
  userAddressReducer: userAddressReducer,
  addProductToCart: addProductToCart,
  cashOrderReducers: cashOrderReducers,
  orderReducers:orderReducers,
  roomsReducers:roomsReducers,
});
