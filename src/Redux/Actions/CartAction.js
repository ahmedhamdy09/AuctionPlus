import { ADD_PRODUCT_TO_CART, GET_ALL_USER_CART_ITEMS } from "../Type";
import { useInsertData } from "../../Hooks/useInsertData";
import useGetDataToken from "../../Hooks/UseGetDataToken";
// Add Cart
export const addProductToCart = (body) => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useInsertData(`/api/v1/cart`, body);
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: e.response,
    });
  }
};

// get All Cart items
export const getAllUserCartItems = () => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useGetDataToken(`/api/v1/cart`);
    dispatch({
      type: GET_ALL_USER_CART_ITEMS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_USER_CART_ITEMS,
      payload: e.response,
    });
  }
};
