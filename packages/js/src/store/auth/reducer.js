import { AuthActions } from "./actions";

const initialState = {
  activeForm: "login",
  isAuthed: false,
  authStatus: "idle",
  recoverStatus: "idle"
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActions.SET_ACTIVE_FORM:
      return { ...state, activeForm: action.activeForm };
    case AuthActions.SET_IS_AUTHED:
      return { ...state, isAuthed: action.isAuthed };
    case AuthActions.SET_AUTH_STATUS:
      return { ...state, authStatus: action.authStatus };
    case AuthActions.SET_RECOVER_STATUS:
      return { ...state, recoverStatus: action.recoverStatus };
    default:
      return state;
  }
};

export default authReducer;
