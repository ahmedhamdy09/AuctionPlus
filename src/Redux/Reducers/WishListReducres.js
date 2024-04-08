import { ADD_TO_WISHLIST, REMOVE_WISHLIST, GET_USER_WISHLIST } from "../Type";

const initail = {
  addWishlist: [],
  removeWishlist: [],
  userWishlist: [],
};

const addToWishlistReducer = (state = initail, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        // update state
        addWishlist: action.payload,
        userWishlist: state.userWishlist,
      };
    case REMOVE_WISHLIST:
      return {
        ...state,
        // update state
        removeWishlist: action.payload,
        // userWishlist: state.userWishlist,
      };
    case GET_USER_WISHLIST:
      return {
        ...state,
        // update state
        userWishlist: action.payload,
      };
    default:
      return state;
  }
};

export default addToWishlistReducer;
