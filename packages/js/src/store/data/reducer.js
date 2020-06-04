import { DataActions } from "./actions";

const initialState = {
  assets: [],
  table: [],
  line: [],
  bar: []
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DataActions.SET_ASSETS:
      return { ...state, assets: action.assets };
    case DataActions.SET_TABLE:
      return { ...state, table: action.table };
    case DataActions.SET_LINE:
      return { ...state, line: action.line };
    case DataActions.SET_BAR:
      return { ...state, bar: action.bar };
    default:
      return state;
  }
};

export default dataReducer;
