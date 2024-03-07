import {
  GET_ALL_CATEGORY,
  GET_ONE_CATEGORY,
  CREATE_CATEGORY,
  GET_ERROR,
} from "../Type";

const initail = {
  category: [],
  createcategory:[],
  oneCategory: [],
  loading: true,
};

const categoryReducer = (state = initail, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return {
        ...state,
        // update state
        category: action.payload,
        loading: false,
      };
    case GET_ONE_CATEGORY:
      return {
        // update state
        oneCategory: action.payload,
        loading: false,
      };
    case CREATE_CATEGORY:
      return {

        createcategory: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
