import {
  CREATE_NEW_EVENTS,
  GET_ALL_EVENTS,
  GENERATEAGORA,
  GENERATEAGORACHAT,
  GETACTIVEROOM,
  ONEEVENT,
  LEAVE,
  UPDATEROOM,
  RTMTOKEN,
  CREATE_AUC,
  UPDATE_AUC,
  DELETE_AUC,
  GETALL_AUC,
  ACTIVEACTION
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
  rtmtoken: [],
  createAcu: [],
  deleteAuc: [],
  getallAuc: [],
  updateAuc: [],
  getOneAuc: [],

  
};

const roomsReducers = (state = initail, action) => {
  switch (action.type) {
    case CREATE_NEW_EVENTS:
      return {
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
    case RTMTOKEN:
      return {
        ...state,
        // update state
        rtmtoken: action.payload,
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
    case CREATE_AUC:
      return {
        // update state
        // ...state,
        createAcu: action.payload,
      };
    case UPDATE_AUC:
      return {
        // update state
        getallAuc:state.getallAuc,
        updateAuc: action.payload,
      };
    case DELETE_AUC:
      return {
        // update state
        // ...state,
        deleteAuc: action.payload,
      };
    case GETALL_AUC:
      return {
        // update state
        ...state,
        getallAuc: action.payload,
      };
      case ACTIVEACTION:
        return {
          // update state
          ...state,
          getOneAuc: action.payload,
        };
    default:
      return state;
  }
};

export default roomsReducers;
