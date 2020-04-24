import { PagesActions } from "./actions";

const initialState = {
  data: []
};

const pagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PagesActions.SET_PAGES:
      return action.pages;
    default:
      return state;
  }
};

export default pagesReducer;
