import { GET_ERROR, GET_SUB_CATEGORY, CREATE_SUB_CATEGORY } from "../Type";

const initail = {
  subcategory: [],
  // createSubCategroy: [],
  loading: true,
};

const subCategoryReducer = (state = initail, action) => {
  switch (action.type) {
    case CREATE_SUB_CATEGORY:
      return {
        ...state,
        // update state
        // createSubCategroy: action.payload,
        subcategory: action.payload,
        loading: false,
      };
    case GET_SUB_CATEGORY:
      return {
        // ...state,
        // update state
        subcategory: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        subcategory: action.payload,
      };
    default:
      return state;
  }
};

export default subCategoryReducer;
