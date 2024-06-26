import { CREATE_NEW_EVENTS, GENERATEAGORA, GENERATEAGORACHAT, GETACTIVEROOM, GET_ALL_EVENTS, LEAVE, ONEEVENT, UPDATEROOM } from "../Type";
import { useInsertData } from "../../Hooks/useInsertData";
import useGetDataToken from "../../Hooks/UseGetDataToken";
import useDeleteData from "../../Hooks/useDeleteData";
import { useUpdateData } from "../../Hooks/useUpdateData";
// import useDeleteData from "../../Hooks/useDeleteData";
// import { useUpdateData } from "../../Hooks/useUpdateData";

// Add Cash Order
export const createNewEvents = (id, body) => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useInsertData(`/api/v1/rooms/newevent/${id}`, body);
    dispatch({
      type: CREATE_NEW_EVENTS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CREATE_NEW_EVENTS,
      payload: e.response,
    });
  }
};

// get All Orders
export const getAllEvents = () => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useGetDataToken(`/api/v1/rooms/all/events`);
    dispatch({
      type: GET_ALL_EVENTS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_EVENTS,
      payload: e.response,
    });
  }
};

export const generateAgoraToken = (body) => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useInsertData(`/api/v1/rooms/agora/rooom/generatetoken`,body);
    dispatch({
      type: GENERATEAGORA,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GENERATEAGORA,
      payload: e.response,
    });
  }
};
export const generateAgoraTokenChat = (body) => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useInsertData(`/api/v1/rooms/agora/rooom/generatetoken`,body);
    dispatch({
      type: GENERATEAGORACHAT,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GENERATEAGORACHAT,
      payload: e.response,
    });
  }
};

export const getAllActiveEvents = () => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useGetDataToken(`/api/v1/rooms/all/activetokshows`);
    dispatch({
      type: GETACTIVEROOM,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GETACTIVEROOM,
      payload: e.response,
    });
  }
};

export const getOneEvent = (id) => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useGetDataToken(`/api/v1/rooms/event/${id}`);
    dispatch({
      type: ONEEVENT,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ONEEVENT,
      payload: e.response,
    });
  }
};

export const leaveFromEvent = (id) => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useDeleteData(`/api/v1/rooms/${id}`);
    dispatch({
      type: LEAVE,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: LEAVE,
      payload: e.response,
    });
  }
};

export const updateRoomAction = (id,body) => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useUpdateData(`/api/v1/rooms/${id}`,body);
    dispatch({
      type: UPDATEROOM,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATEROOM,
      payload: e.response,
    });
  }
};