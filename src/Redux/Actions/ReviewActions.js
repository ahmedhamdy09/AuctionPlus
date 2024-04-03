import {
  CREATE_REVIEW,
  GET_ONE_REVIEW_TO_ONE_PRODUCT,
  DELETE_REVIEW,
  UPDATE_REVIEW,
} from "../Type";
import { useInsertData } from "../../Hooks/useInsertData";
import useGetDataToken from "../../Hooks/UseGetDataToken";
import useDeleteData from "../../Hooks/useDeleteData";
import { useUpdateData } from "../../Hooks/useUpdateData";
// create rate Review
export const createReview = (prodID, body) => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useInsertData(
      `/api/v1/products/${prodID}/reviews`,
      body
    );
    dispatch({
      type: CREATE_REVIEW,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CREATE_REVIEW,
      payload: e.response,
    });
  }
};

// get all rate Review to one products
export const getallReviewToOneProducts =
  (prodID, page, limit) => async (dispatch) => {
    try {
      // use insert data because is post
      const response = await useGetDataToken(
        `/api/v1/products/${prodID}/reviews?page=${page}&limit=${limit}`
      );
      dispatch({
        type: GET_ONE_REVIEW_TO_ONE_PRODUCT,
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: GET_ONE_REVIEW_TO_ONE_PRODUCT,
        payload: e.response,
      });
    }
  };

// get all rate Review to one products
export const deleteReviewOneProducts = (_id) => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useDeleteData(`/api/v1/reviews/${_id}`);
    dispatch({
      type: DELETE_REVIEW,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: DELETE_REVIEW,
      payload: e.response,
    });
  }
};

// update Rate
export const updateRate = (_id, body) => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useUpdateData(`/api/v1/reviews/${_id}`, body);
    dispatch({
      type: UPDATE_REVIEW,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_REVIEW,
      payload: e.response,
    });
  }
};
