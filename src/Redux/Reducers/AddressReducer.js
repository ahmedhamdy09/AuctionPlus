import {
  ADD_USER_ADDRESS,
  GET_ALL_USER_ADDRESS,
  DELETE_USER_ADDRESS,
} from "../Type";

const initail = {
  addUserAddress: [],
  userAddress: [],
  deleteUserAddress: [],
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
    default:
      return state;
  }
};

export default userAddressReducer;
