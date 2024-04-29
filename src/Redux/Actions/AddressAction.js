import {
  ADD_USER_ADDRESS,
  GET_ALL_USER_ADDRESS,
  DELETE_USER_ADDRESS,
  GET_ONE_USER_ADDRESS,
  UPDATE_USER_ADDRESS,
  GET_LOGGED_USER,
} from "../Type";
import { useInsertData } from "../../Hooks/useInsertData";
import useGetDataToken from "../../Hooks/UseGetDataToken";
import useDeleteData from "../../Hooks/useDeleteData";
import { useUpdateData } from "../../Hooks/useUpdateData";

// Add address
export const addUserAddress = (body) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/adress`, body);
    dispatch({
      type: ADD_USER_ADDRESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ADD_USER_ADDRESS,
      payload: e.response,
    });
  }
};

// get all users
export const getAllUserAddress = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/adress`);
    dispatch({
      type: GET_ALL_USER_ADDRESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_USER_ADDRESS,
      payload: e.response,
    });
  }
};

// delete all users
export const deleteUserAddress = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/adress/${id}`);
    dispatch({
      type: DELETE_USER_ADDRESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: DELETE_USER_ADDRESS,
      payload: e.response,
    });
  }
};

// get one  user
export const getOneUserAddress = (id) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/adress/${id}`);
    dispatch({
      type: GET_ONE_USER_ADDRESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ONE_USER_ADDRESS,
      payload: e.response,
    });
  }
};

// update Addresses
export const updateAddress = (id, body) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/adress/${id}`, body);
    dispatch({
      type: UPDATE_USER_ADDRESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_USER_ADDRESS,
      payload: e.response,
    });
  }
};

// get one  user
export const getLoggedUser = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/users/getMe`);
    dispatch({
      type: GET_LOGGED_USER,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_LOGGED_USER,
      payload: e.response,
    });
  }
};
