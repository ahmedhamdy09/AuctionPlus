import useGetDataToken from "../../Hooks/UseGetDataToken";
import useDeleteData from "../../Hooks/useDeleteData";
import { useInsertData } from "../../Hooks/useInsertData";
import { ADD_TO_WISHLIST, REMOVE_WISHLIST, GET_USER_WISHLIST } from "../Type";

// add products to wishlist
export const addProductsToWishLists = (body) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/wishlist`, body);
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: e.response,
    });
  }
};

// remove products to wishlist
export const removeProductsToWishLists = (prodID) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/wishlist/${prodID}`);
    dispatch({
      type: REMOVE_WISHLIST,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: REMOVE_WISHLIST,
      payload: e.response,
    });
  }
};

// get wishlist products
export const getProductsWishLists = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/wishlist`);
    dispatch({
      type: GET_USER_WISHLIST,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_USER_WISHLIST,
      payload: e.response,
    });
  }
};
