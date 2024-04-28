import { CREATE_NEW_EVENTS } from "../Type";

const initail = {
  createNewEvents: [],
};

const roomsReducers = (state = initail, action) => {
  switch (action.type) {
    case CREATE_NEW_EVENTS:
      return {
        ...state,
        // update state
        createNewEvents: action.payload,
      };

    default:
      return state;
  }
};

export default roomsReducers;
