import { AuthState, AuthActions } from "typings/auth";

// Type-safe initialState!
const initialState: AuthState = {
  activeForm: "login",
  isAuthed: false,
  authStatus: "idle",
  recoverStatus: "idle",
};

const authReducer = (state = initialState, action): AuthState => {
  switch (action.type) {
    case AuthActions.SET_ACTIVE_FORM:
      return { ...state, activeForm: action.payload };
    case AuthActions.SET_IS_AUTHED:
      return { ...state, isAuthed: action.payload };
    case AuthActions.SET_AUTH_STATUS:
      return { ...state, authStatus: action.payload };
    case AuthActions.SET_RECOVER_STATUS:
      return { ...state, recoverStatus: action.payload };
    default:
      return state;
  }
};

export default authReducer;
