// eslint-disable-next-line
import { CREATE_NEW_USER, LOGIN_USER, GET_CURRENT_USER } from "../Type";
import { useInsertData } from "../../Hooks/useInsertData";
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
