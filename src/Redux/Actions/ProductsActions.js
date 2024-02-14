import useGetData from "../../Hooks/useGetData";
import useDeleteData from "../../Hooks/useDeleteData";
import { useInsertDataWithImages } from "../../Hooks/useInsertData";
import {
  CREATE_PRODUCTS,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_LIKE,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_ERROR,
} from "../Type";
import { useUpdateDataWithImages } from "../../Hooks/useUpdateData";

//create products with pagination
export const createProducts = (formatData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImages(
      `/api/v1/products`,
      formatData
    );
    dispatch({
      type: CREATE_PRODUCTS,
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

//get all products with pagination
export const getAllProducts = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?limit=${limit}`);
    dispatch({
      type: GET_ALL_PRODUCTS,
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

//get all products with pagination with pageNumber
export const getAllProductsPageNumber = (page, limit) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/products?page=${page}&limit=${limit}`
    );
    dispatch({
      type: GET_ALL_PRODUCTS,
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

//get one products with id
export const getOneProduct = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products/${id}`);
    dispatch({
      type: GET_PRODUCT_DETAILS,
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

//get one products with id
export const getProductLike = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products/?category=${id}`);
    dispatch({
      type: GET_PRODUCT_LIKE,
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

//delete one products with id
export const deleteProducts = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/products/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
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

//update one products with id
export const updateProducts = (id, data) => async (dispatch) => {
  try {
    const response = await useUpdateDataWithImages(
      `/api/v1/products/${id}`,
      data
    );
    dispatch({
      type: UPDATE_PRODUCT,
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
