import {
  ADD_USER_ADDRESS,
  GET_ALL_USER_ADDRESS,
  DELETE_USER_ADDRESS,
  GET_ONE_USER_ADDRESS,
  UPDATE_USER_ADDRESS,
} from "../Type";

const initail = {
  addUserAddress: [],
  userAddress: [],
  deleteUserAddress: [],
  oneUserAddress: [],
  updateUserAddress: [],
};

const userAddressReducer = (state = initail, action) => {
  switch (action.type) {
    case ADD_USER_ADDRESS:
      return {
        ...state,
        // update state
        addUserAddress: action.payload,
      };
    case GET_ALL_USER_ADDRESS:
      return {
        // update state
        userAddress: action.payload,
      };
    case DELETE_USER_ADDRESS:
      return {
        ...state,
        // update state
        deleteUserAddress: action.payload,
      };
    case GET_ONE_USER_ADDRESS:
      return {
        ...state,
        // update state
        oneUserAddress: action.payload,
      };
    case UPDATE_USER_ADDRESS:
      return {
        ...state,
        // update state
        updateUserAddress: action.payload,
      };
    default:
      return state;
  }
};

export default userAddressReducer;
