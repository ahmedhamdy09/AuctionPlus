import {
  ADD_PRODUCT_TO_CART,
  GET_ALL_USER_CART_ITEMS,
  CLEAR_ALL_USER_CART_ITEMS,
  DELETE_ONE_CART_ITEMS,
  UPDATE_CART_ITEMS,
  APPLY_COUPON_TO_CART,
} from "../Type";

const initail = {
  addProductToCart: [],
  getAlluserCartItems: [],
  clearAlluserCartItems: [],
  deleteOneCartItems: [],
  updateCartItems: [],
  applyCouponToCart: [],
};

const addProductToCart = (state = initail, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        // update state
        addProductToCart: action.payload,
      };
    case GET_ALL_USER_CART_ITEMS:
      return {
        ...state,
        // update state
        getAlluserCartItems: action.payload,
      };
    case CLEAR_ALL_USER_CART_ITEMS:
      return {
        ...state,
        // update state
        clearAlluserCartItems: action.payload,
      };
    case DELETE_ONE_CART_ITEMS:
      return {
        ...state,
        // update state
        deleteOneCartItems: action.payload,
      };
    case UPDATE_CART_ITEMS:
      return {
        ...state,
        // update state
        updateCartItems: action.payload,
      };
    case APPLY_COUPON_TO_CART:
      return {
        ...state,
        // update state
        applyCouponToCart: action.payload,
      };
    default:
      return state;
  }
};

export default addProductToCart;
