import authReducer from "../reducer";
import { AuthActions } from "../actions";

describe("auth reducer", () => {
  const initialState = {
    activeForm: "login",
    isAuthed: false,
    authStatus: "idle",
    recoverStatus: "idle"
  };

  it("set default state", () => {
    const newState = authReducer(undefined, { type: "MOCK_TYPE" });
    expect(newState).toEqual(initialState);
  });

  it("set auth sate", () => {
    const action = {
      type: AuthActions.SET_AUTH_STATUS,
      authStatus: true
    };

    const newState = authReducer(null, action);

    expect(newState).toEqual({
      authStatus: true
    });
  });
});
