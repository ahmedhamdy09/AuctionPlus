import {
  CREATE_PRODUCTS,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_LIKE,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_ERROR,
  GET_ALL_PRODUCTS_BY_CATEGORY,
  GET_ALL_PRODUCTS_BY_BRAND,
} from "../Type";

const initail = {
  products: [],
  allProducts: [],
  oneProduct: [],
  productLike: [],
  deleteProduct: [],
  updateProducts: [],
  getProductByCategory: [],
  getProductByBrand: [],
  loading: true,
};

const productsReducer = (state = initail, action) => {
  switch (action.type) {
    case CREATE_PRODUCTS:
      return {
        ...state,
        // update state
        products: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        // update state
        allProducts: action.payload,
        loading: false,
      };
    case GET_PRODUCT_DETAILS:
      return {
        ...state,
        // update state
        oneProduct: action.payload,
        loading: false,
      };
    case GET_PRODUCT_LIKE:
      return {
        ...state,
        // update state
        productLike: action.payload,
        loading: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        // update state
        deleteProduct: action.payload,
        loading: false,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        // update state
        updateProducts: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCTS_BY_CATEGORY:
      return {
        // ...state,
        // update state
        getProductByCategory: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCTS_BY_BRAND:
      return {
        // ...state,
        // update state
        getProductByBrand: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
