import { CREATE_SUB_CATEGORY, GET_SUB_CATEGORY, GET_SUB_CATEGORY_PRODUCTS,GET_ERROR } from "../Type";
// eslint-disable-next-line
import useGetData from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";

//create subCategory
export const createSubCategory = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/subcategory`, data);

    dispatch({
      type: CREATE_SUB_CATEGORY,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "ERROR" + e,
    });
  }
};

//get subCategory depends in category id

// id
export const getOneSubCategory = (_id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/subcategory/${_id}`);
    // const response = await useGetData(`/api/v1/category/${_id}/subcategories`);

    dispatch({
      type: GET_SUB_CATEGORY,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "ERROR" + e,
    });
  }
};


export const getOneSubCategoryProducts = (_id) => async (dispatch) => {
  try {
    // const response = await useGetData(`/api/v1/subcategory/${_id}`);
    const response = await useGetData(`/api/v1/category/${_id}/subcategories`);

    dispatch({
      type: GET_SUB_CATEGORY_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "ERROR" + e,
    });
  }
};
