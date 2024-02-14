import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/RootReducers";
import { composeWithDevTools } from "@redux-devtools/extension";
const initailState = {};
const middleware = [thunk];

const Store = createStore(
  rootReducer,
  initailState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
