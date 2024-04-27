import { CREATE_ORDER_CASH, CREATE_ORDER_BY_CARD } from "../Type";
import { useInsertData } from "../../Hooks/useInsertData";
import useGetDataToken from "../../Hooks/UseGetDataToken";
// import useDeleteData from "../../Hooks/useDeleteData";
// import { useUpdateData } from "../../Hooks/useUpdateData";

// Add Cash Order
export const createOrderCash = (id, body) => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useInsertData(`/api/v1/orders/${id}`, body);
    dispatch({
      type: CREATE_ORDER_CASH,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CREATE_ORDER_CASH,
      payload: e.response,
    });
  }
};

// Add Order by Card
export const createOrderByCard = (id, body) => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useGetDataToken(
      `/api/v1/orders/checkout-session/${id}`,
      body
    );
    dispatch({
      type: CREATE_ORDER_BY_CARD,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CREATE_ORDER_BY_CARD,
      payload: e.response,
    });
  }
};
