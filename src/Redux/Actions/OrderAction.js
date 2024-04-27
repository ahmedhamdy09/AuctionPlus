import { GET_ALL_ORDERS, GET_ONE_ORDER, UPDATE_ORDER_TO_PAY ,UPDATE_ORDER_TO_DELIVER} from "../Type";
// import { useInsertData } from "../../Hooks/useInsertData";
import useGetDataToken from "../../Hooks/UseGetDataToken";
// import useDeleteData from "../../Hooks/useDeleteData";
import { useUpdateData } from "../../Hooks/useUpdateData";

// get All Orders
export const getAllOrder = () => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useGetDataToken(`/api/v1/orders`);
    dispatch({
      type: GET_ALL_ORDERS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_ORDERS,
      payload: e.response,
    });
  }
};

// get one Orders
export const getOneOrder = (id) => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useGetDataToken(`/api/v1/orders/${id}`);
    dispatch({
      type: GET_ONE_ORDER,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ONE_ORDER,
      payload: e.response,
    });
  }
};

// get  Orders pay
export const updateOrderToPaid = (id) => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useUpdateData(`/api/v1/orders/${id}/pay`);
    dispatch({
      type: UPDATE_ORDER_TO_PAY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_ORDER_TO_PAY,
      payload: e.response,
    });
  }
};

// get  Orders Delivery
export const updateOrderToDeliver = (id) => async (dispatch) => {
  try {
    // use insert data because is post
    const response = await useUpdateData(`/api/v1/orders/${id}/deliver`);
    dispatch({
      type: UPDATE_ORDER_TO_DELIVER,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_ORDER_TO_DELIVER,
      payload: e.response,
    });
  }
};
