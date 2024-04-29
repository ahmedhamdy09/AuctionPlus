import { CREATE_NEW_EVENTS,GET_ALL_EVENTS } from "../Type";

const initail = {
  createNewEvents: [],
  getAllEvents: [],
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
    default:
      return state;
  }
};

export default roomsReducers;
