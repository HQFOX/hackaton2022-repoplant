import { combineReducers } from "redux";

import authReducer from "./auth/reducer";

const createRootReducer = () =>
  combineReducers({
    auth: authReducer,
  });

export default createRootReducer;
