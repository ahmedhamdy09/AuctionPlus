import { GET_ALL_BRAND, CREATE_BRAND, GET_ONE_BRAND, GET_ERROR } from "../Type";
import useGetData from "../../Hooks/useGetData";
import { useInsertDataWithImages } from "../../Hooks/useInsertData";
// get all Brand
export const getAllBrand = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/brands?limit=${limit}`);
    dispatch({
      type: GET_ALL_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "ERROR" + e,
    });
  }
};

// get one Brand
export const getOneBrand = (_id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/brands/${_id}`);
    dispatch({
      type: GET_ONE_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "ERROR" + e,
    });
  }
};
//get all Brand with pagination
export const getAllBrandPage = (page) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/brands?limit=6&page=${page}`);
    dispatch({
      type: GET_ALL_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "ERROR" + e,
    });
  }
};

//insert brand with pagination
export const createBrand = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImages(`/api/v1/brands`, formData);
    dispatch({
      type: CREATE_BRAND,
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
