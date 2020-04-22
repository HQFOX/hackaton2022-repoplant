import { createReducer } from "typesafe-actions";
import { AuthState, AuthActions } from "typings/auth";

// Type-safe initialState!
const initialState: AuthState = {
  isAuthed: true
};

const authReducer = createReducer(initialState, {
  [AuthActions.SET_AUTH]: (state, action) => ({
    isAuthed: action.payload
  })
});

export default authReducer;
