import { CREATE_PRODUCTS_AUCTION, GET_ERROR } from "../Type";

const initail = {
  productsAuction: [],
  loading: true,
};

const auctionProductsReducer = (state = initail, action) => {
  switch (action.type) {
    case CREATE_PRODUCTS_AUCTION:
      return {
        ...state,
        // update state
        productsAuction: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        productsAuction: action.payload,
      };
    default:
      return state;
  }
};

export default auctionProductsReducer;
