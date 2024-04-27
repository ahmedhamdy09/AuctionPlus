import {
  GET_ALL_ORDERS,
  GET_ONE_ORDER,
  UPDATE_ORDER_TO_PAY,
  UPDATE_ORDER_TO_DELIVER,
} from "../Type";

const initail = {
  getAllOrder: [],
  getOneOrder: [],
  updateOrderToPay: [],
  updateOrderToDeliver: [],
};

const orderReducers = (state = initail, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS:
      return {
        ...state,
        // update state
        getAllOrder: action.payload,
      };
    case GET_ONE_ORDER:
      return {
        ...state,
        // update state
        getOneOrder: action.payload,
      };
    case UPDATE_ORDER_TO_PAY:
      return {
        ...state,
        // update state
        updateOrderToPay: action.payload,
      };
    case UPDATE_ORDER_TO_DELIVER:
      return {
        ...state,
        // update state
        updateOrderToDeliver: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducers;
