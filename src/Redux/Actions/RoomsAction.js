import { CREATE_NEW_EVENTS, GENERATEAGORA, GENERATEAGORACHAT, GET_ALL_EVENTS } from "../Type";
import { useInsertData } from "../../Hooks/useInsertData";
import useGetDataToken from "../../Hooks/UseGetDataToken";
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

