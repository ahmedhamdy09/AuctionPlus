import {
  GET_ALL_CATEGORY,
  GET_ONE_CATEGORY,
  CREATE_CATEGORY,
  GET_ERROR,
} from "../Type";
import useGetData from "../../Hooks/useGetData";
import { useInsertDataWithImages } from "../../Hooks/useInsertData";
// get all catogry
// limits
export const getAllCategory = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/category?limit=${limit}`);
    // const response = await useGetData(`/api/v1/categories?limit=${limits}`);
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "ERROR" + e,
    });
  }
};

// get one catogry
export const getOneCategory = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/category/${id}`);

    // const response = await useGetData(`/api/v1/categories/${id}`);
    dispatch({
      type: GET_ONE_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "ERROR" + e,
    });
  }
};

//get all category with pagination
export const getAllCategoryPage = (page) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/category?page=${page}&limit=6`);
    // const response = await useGetData(
    //   `/api/v1/categories?limit=6&page=${page}`
    // );
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "ERROR" + e,
    });
  }
};

export const createCategory = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImages(
      `/api/v1/category`,
      formData
    );
    // const response = await useInsertDataWithImages(
    //   `/api/v1/categories`,
    //   formData
    // );
    dispatch({
      type: CREATE_CATEGORY,
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
