import { useInsertDataWithImages } from "../../Hooks/useInsertData";
import { CREATE_PRODUCTS_AUCTION, GET_ERROR } from "../Type";

//create products with pagination
export const createProductsAuction = (formatData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImages(
      `/api/v1/auctions`,
      formatData
    );
    dispatch({
      type: CREATE_PRODUCTS_AUCTION,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "ERROR" + e,
    });
  }
};
