// eslint-disable-next-line
import {
  CREATE_NEW_USER,
  LOGIN_USER,
  FORGET_PASSWORD,
  VERIFY_OTP,
  RESET_PASSWORD,
  UPDATE_PROFILE_DATA,
  UPDATE_PROFILE_PASSWORD,
} from "../Type";
import { useInsertData } from "../../Hooks/useInsertData";
import { useUpdateData } from "../../Hooks/useUpdateData";

// import useGetDataToken from "../../Hooks/UseGetDataToken.js";

//creat new user
export const createNewUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/signup`, data);
    dispatch({
      type: CREATE_NEW_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CREATE_NEW_USER,
      payload: e.response,
    });
  }
};

//login user
export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/login`, data);
    dispatch({
      type: LOGIN_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: LOGIN_USER,
      payload: e.response,
    });
  }
};

// forgetPasswrod Email
export const forgetEmail = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/forgotPassword`, data);
    dispatch({
      type: FORGET_PASSWORD,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: FORGET_PASSWORD,
      payload: e.response,
    });
  }
};

// forgetPasswrod otp
export const verfiyOtp = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/verifyResetCode`, data);
    dispatch({
      type: VERIFY_OTP,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: VERIFY_OTP,
      payload: e.response,
    });
  }
};

// reset Password
export const resetPassword = (data) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/auth/resetPassword`, data);
    dispatch({
      type: RESET_PASSWORD,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: RESET_PASSWORD,
      payload: e.response,
    });
  }
};

// update user data
export const updateUserProfileData = (body) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/users/updateMe`, body);
    dispatch({
      type: UPDATE_PROFILE_DATA,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_PROFILE_DATA,
      payload: e.response,
    });
  }
};

// update user data
export const updateUserProfilePassword = (body) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/users/changeMyPassword`, body);
    dispatch({
      type: UPDATE_PROFILE_PASSWORD,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_PROFILE_PASSWORD,
      payload: e.response,
    });
  }
};


// دي هعملها لما الباك يعمل logged User
// ملحوظة لسة مخلصتش
//login user
// export const getLoggedUser = () => async (dispatch) => {
//   try {
// لما الباك يبعت هغير اللينك
//     const response = await useGetDataToken(`/api/v1/auth/login`);
//     dispatch({
//       type: GET_CURRENT_USER,
//       payload: response,
//       loading: true,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_CURRENT_USER,
//       payload: e.response,
//     });
//   }
// };
