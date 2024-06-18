import { CREATE_NEW_EVENTS, GET_ALL_EVENTS, GENERATEAGORA, GENERATEAGORACHAT } from "../Type";

const initail = {
  createNewEvents: [],
  getAllEvents: [],
  generateAgoratoken: [],
  generateAgoratokenChat: [],
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
          generateAgoratokenChat: action.payload,
        };
    case GENERATEAGORA:
      return {
        // update state
        generateAgoratoken: action.payload,
      };
    default:
      return state;
  }
};

export default roomsReducers;
