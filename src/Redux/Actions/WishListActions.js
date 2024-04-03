import { useInsertData } from "../../Hooks/useInsertData";
import { ADD_TO_WISHLIST } from "../Type";

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
