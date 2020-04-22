import { createReducer } from "typesafe-actions";
import { PagesState, PagesActions } from "typings/pages";

// Type-safe initialState!
const initialState: PagesState = {
  data: []
};

const pagesReducer = createReducer(initialState, {
  [PagesActions.SET_PAGES]: (state, action) => action.payload
});

export default pagesReducer;
