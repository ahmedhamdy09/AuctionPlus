import {
  ADD_PRODUCT_TO_CART,
  GET_ALL_USER_CART_ITEMS,
  CLEAR_ALL_USER_CART_ITEMS,
  DELETE_ONE_CART_ITEMS,
  UPDATE_CART_ITEMS,
} from "../Type";
import { useInsertData } from "../../Hooks/useInsertData";
import useGetDataToken from "../../Hooks/UseGetDataToken";
import useDeleteData from "../../Hooks/useDeleteData";
import { useUpdateData } from "../../Hooks/useUpdateData";

// Add Cart
export const addProductToCart = (body) => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useInsertData(`/api/v1/cart`, body);
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: e.response,
    });
  }
};

// get All Cart items
export const getAllUserCartItems = () => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useGetDataToken(`/api/v1/cart`);
    dispatch({
      type: GET_ALL_USER_CART_ITEMS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_USER_CART_ITEMS,
      payload: e.response,
    });
  }
};

// clear All Cart items
export const clearAllCart = () => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useDeleteData(`/api/v1/cart`);
    dispatch({
      type: CLEAR_ALL_USER_CART_ITEMS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CLEAR_ALL_USER_CART_ITEMS,
      payload: e.response,
    });
  }
};

// delete one Cart items
export const deleteOneCart = (id) => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useDeleteData(`/api/v1/cart/${id}`);
    dispatch({
      type: DELETE_ONE_CART_ITEMS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: DELETE_ONE_CART_ITEMS,
      payload: e.response,
    });
  }
};

// update  Cart items
export const updateCart = (id, body) => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useUpdateData(`/api/v1/cart/${id}`, body);
    dispatch({
      type: UPDATE_CART_ITEMS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_CART_ITEMS,
      payload: e.response,
    });
  }
};
