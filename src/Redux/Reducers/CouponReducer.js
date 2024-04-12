import { ADD_COUPONS, GET_ALL_COUPONS, DELETE_COUPONS,GET_ONE_COUPONS,EDIT_COUPONS } from "../Type";

const initail = {
  addCoupon: [],
  allCoupon: [],
  deleteCoupon: [],
  oneCoupon: [],
  editCoupon: [],
};

const couponReducer = (state = initail, action) => {
  switch (action.type) {
    case ADD_COUPONS:
      return {
        ...state,
        // update state
        addCoupon: action.payload,
      };
    case GET_ALL_COUPONS:
      return {
        ...state,
        // update state
        allCoupon: action.payload,
      };
    case DELETE_COUPONS:
      return {
        ...state,
        // update state
        deleteCoupon: action.payload,
      };
      case GET_ONE_COUPONS:
        return {
         ...state,
          // update state
          oneCoupon: action.payload,
        };
        case EDIT_COUPONS:
          return {
           ...state,
            // update state
            editCoupon: action.payload,
          };
    default:
      return state;
  }
};

export default couponReducer;
