import { CREATE_SUB_CATEGORY, GET_SUB_CATEGORY, GET_ERROR } from "../Type";
// eslint-disable-next-line
import useGetData from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";

//create subCategory
export const createSubCategory = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/subcategories`, data);

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
    const response = await useGetData(`/api/v1/subcategories/${_id}`);

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
