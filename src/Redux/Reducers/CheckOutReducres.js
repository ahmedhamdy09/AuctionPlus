import { CREATE_ORDER_CASH } from "../Type";

const initail = {
  createCashOrder: [],
};

const cashOrderReducers = (state = initail, action) => {
  switch (action.type) {
    case CREATE_ORDER_CASH:
      return {
        ...state,
        // update state
        createCashOrder: action.payload,
      };

    default:
      return state;
  }
};

export default cashOrderReducers;
