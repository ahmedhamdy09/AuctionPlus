// eslint-disable-next-line
import {
  CREATE_NEW_USER,
  LOGIN_USER,
  FORGET_PASSWORD,
  VERIFY_OTP,
  RESET_PASSWORD,
} from "../Type";

const initial = {
  createUser: [],
  loginUser: [],
  // currentLoggedUser: [],
  forgetPassword: [],
  verifyOtp: [],
  resetPassword: [],
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
    case FORGET_PASSWORD:
      return {
        ...state,
        forgetPassword: action.payload,
        loading: false,
      };
    case VERIFY_OTP:
      return {
        ...state,
        verifyOtp: action.payload,
        loading: false,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        resetPassword: action.payload,
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
