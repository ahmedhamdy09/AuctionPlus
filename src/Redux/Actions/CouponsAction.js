import {
  ADD_COUPONS,
  GET_ALL_COUPONS,
  DELETE_COUPONS,
  GET_ONE_COUPONS,
  EDIT_COUPONS,
} from "../Type";
import { useInsertData } from "../../Hooks/useInsertData";
import useGetDataToken from "../../Hooks/UseGetDataToken";
import useDeleteData from "../../Hooks/useDeleteData";
import { useUpdateData } from "../../Hooks/useUpdateData";
// Add Coupon
export const addCoupon = (body) => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useInsertData(`/api/v1/coupons`, body);
    dispatch({
      type: ADD_COUPONS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ADD_COUPONS,
      payload: e.response,
    });
  }
};

// get all coupon
export const getAllCoupon = () => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useGetDataToken(`/api/v1/coupons`);
    dispatch({
      type: GET_ALL_COUPONS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_COUPONS,
      payload: e.response,
    });
  }
};

// delete coupon
export const deleteCoupon = (id) => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useDeleteData(`/api/v1/coupons/${id}`);
    dispatch({
      type: DELETE_COUPONS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: DELETE_COUPONS,
      payload: e.response,
    });
  }
};

// get all coupon
export const getOneCoupon = (id) => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useGetDataToken(`/api/v1/coupons/${id}`);
    dispatch({
      type: GET_ONE_COUPONS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ONE_COUPONS,
      payload: e.response,
    });
  }
};

// edit coupon
// get all coupon
export const editCoupon = (id, body) => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useUpdateData(`/api/v1/coupons/${id}`, body);
    dispatch({
      type: EDIT_COUPONS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: EDIT_COUPONS,
      payload: e.response,
    });
  }
};
