import { DataActions, DataState } from "typings/data";

// Type-safe initialState!
const initialState: DataState = {
  assets: [],
  table: [],
  line: [],
  bar: [],
};

const dataReducer = (state = initialState, action): DataState => {
  switch (action.type) {
    case DataActions.SET_ASSETS:
      return { ...state, assets: action.payload };
    case DataActions.SET_TABLE:
      return { ...state, table: action.payload };
    case DataActions.SET_LINE:
      return { ...state, line: action.payload };
    case DataActions.SET_BAR:
      return { ...state, bar: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
