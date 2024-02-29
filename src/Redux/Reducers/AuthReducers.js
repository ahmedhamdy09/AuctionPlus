// eslint-disable-next-line
import { CREATE_NEW_USER, LOGIN_USER, GET_CURRENT_USER } from "../Type";

const initial = {
  createUser: [],
  loginUser: [],
  // currentLoggedUser: [],
  loading: true,
};
const authReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_NEW_USER:
      return {
        ...state,
        // update state
        createUser: action.payload,
        loading: false,
      };
    case LOGIN_USER:
      return {
        ...state,
        // update state
        loginUser: action.payload,
        loading: false,
      };
      // case GET_CURRENT_USER:
      //   return {
      //     ...state,
      //     // update state
      //     currentLoggedUser: action.payload,
      //     loading: false,
      //   }

    default:
      return state;
  }
};

export default authReducer;
