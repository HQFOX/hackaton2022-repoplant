import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import authReducer from "./auth/reducer";
import pagesReducer from "./pages/reducer";

const createRootReducer = history =>
  combineReducers({
    auth: authReducer,
    pages: pagesReducer,
    router: connectRouter(history)
  });

export default createRootReducer;
