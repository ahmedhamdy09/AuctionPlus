import { CREATE_ORDER_CASH, CREATE_ORDER_BY_CARD } from "../Type";

const initail = {
  createCashOrder: [],
  createOrderByCard: [],
};

const cashOrderReducers = (state = initail, action) => {
  switch (action.type) {
    case CREATE_ORDER_CASH:
      return {
        ...state,
        // update state
        createCashOrder: action.payload,
      };
    case CREATE_ORDER_BY_CARD:
      return {
        ...state,
        // update state
        createOrderByCard: action.payload,
      };
    default:
      return state;
  }
};

export default cashOrderReducers;
