import { CREATE_NEW_USER, LOGIN_USER } from "../Type";

const initial = {
  createUser: [],
  loginUser: [],
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

    default:
      return state;
  }
};

export default authReducer;
