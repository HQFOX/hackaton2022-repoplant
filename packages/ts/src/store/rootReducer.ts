import { combineReducers } from "redux";
import { History } from "history";
import { connectRouter } from "connected-react-router";

import authReducer from "./auth/reducer";
import pagesReducer from "./pages/reducer";

const createRootReducer = (history: History) =>
  combineReducers({
    auth: authReducer,
    pages: pagesReducer,
    router: connectRouter(history)
  });

export default createRootReducer;
