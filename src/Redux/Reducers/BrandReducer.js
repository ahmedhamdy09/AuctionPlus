import { GET_ALL_BRAND, CREATE_BRAND, GET_ONE_BRAND, GET_ERROR } from "../Type";

const initial = {
  brand: [],
  loading: true,
  createBrand: [],
  oneBrand: [],
};
const BrandReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_BRAND:
      return {
        ...state,
        // update state
        brand: action.payload,
        loading: false,
      };
    case GET_ONE_BRAND:
      return {
        // update state
        oneBrand: action.payload,
        loading: false,
      };
    case CREATE_BRAND:
      return {
        // brand: action.payload,
        createBrand: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        brand: action.payload,
      };
    default:
      return state;
  }
};

export default BrandReducer;
