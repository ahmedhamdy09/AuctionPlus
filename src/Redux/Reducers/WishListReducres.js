import { ADD_TO_WISHLIST } from "../Type";

const initail = {
  addWishlist: [],
};

const addToWishlistReducer = (state = initail, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        // update state
        addWishlist: action.payload,
      };
    default:
      return state;
  }
};

export default addToWishlistReducer;
