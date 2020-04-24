import { AuthActions } from "./actions";

const initialState = {
  isAuthed: true
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActions.SET_AUTH:
      return { ...state, isAuthed: action.isAuthed };
    default:
      return state;
  }
};

export default authReducer;
