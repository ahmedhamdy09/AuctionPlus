import { ADD_PRODUCT_TO_CART,GET_ALL_USER_CART_ITEMS } from "../Type";

const initail = {
  addProductToCart: [],
  getAlluserCartItems: [],
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
    default: 
      return state;
  }
};

export default addProductToCart;
