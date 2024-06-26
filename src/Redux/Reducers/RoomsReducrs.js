import {
  CREATE_NEW_EVENTS,
  GET_ALL_EVENTS,
  GENERATEAGORA,
  GENERATEAGORACHAT,
  GETACTIVEROOM,
  ONEEVENT,
  LEAVE,
  UPDATEROOM,
} from "../Type";

const initail = {
  createNewEvents: [],
  getAllEvents: [],
  getActiveRoom: [],
  generateAgoratoken: [],
  generateAgoratokenChat: [],
  OneEvent: [],
  Leave: [],
  UpdateRoom: [],
};

const roomsReducers = (state = initail, action) => {
  switch (action.type) {
    case CREATE_NEW_EVENTS:
      return {
        ...state,
        // update state

        createNewEvents: action.payload,
      };
    case GET_ALL_EVENTS:
      return {
        ...state,
        // update state
        getAllEvents: action.payload,
      };
    case GENERATEAGORACHAT:
      return {
        // update state
        ...state,
        generateAgoratokenChat: action.payload,
      };
    case GENERATEAGORA:
      return {
        ...state,
        // update state
        generateAgoratoken: action.payload,
      };
    case GETACTIVEROOM:
      return {
        // update state
        getActiveRoom: action.payload,
      };
    case ONEEVENT:
      return {
        // update state
        ...state,
        OneEvent: action.payload,
      };
    case LEAVE:
      return {
        // update state
        // ...state,
        Leave: action.payload,
      };
    case UPDATEROOM:
      return {
        // update state
        // ...state,
        UpdateRoom: action.payload,
      };
    default:
      return state;
  }
};

export default roomsReducers;
