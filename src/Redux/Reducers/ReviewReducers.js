import { CREATE_REVIEW, GET_ONE_REVIEW_TO_ONE_PRODUCT,DELETE_REVIEW , UPDATE_REVIEW} from "../Type";

const initail = {
  createReview: [],
  allReviewProducts: [],
  deleteReview:[],
  updateReview: [],
  loading: true,
};

const reviewReducer = (state = initail, action) => {
  switch (action.type) {
    case CREATE_REVIEW:
      return {
        ...state,
        // update state
        createReview: action.payload,
        loading: false,
      };
    case GET_ONE_REVIEW_TO_ONE_PRODUCT:
      return {
        ...state,
        // update state
        allReviewProducts: action.payload,
        loading: false,
      };
      case DELETE_REVIEW:
        return {
         ...state,
          // update state
          deleteReview: action.payload,
          loading: false,
        };
        case UPDATE_REVIEW:
          return {
           ...state,
            // update state
            updateReview: action.payload,
            loading: false,
          };

    default:
      return state;
  }
};

export default reviewReducer;
