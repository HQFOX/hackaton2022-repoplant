import authReducer from "../reducer";
import { AuthActions } from "../actions";

describe("auth reducer", () => {
  const initialState = {
    isAuthed: true
  };

  it("set default state", () => {
    const newState = authReducer(undefined, { type: "MOCK_TYPE" });

    expect(newState).toEqual(initialState);
  });

  it("set auth sate", () => {
    const action = {
      type: AuthActions.SET_AUTH,
      isAuthed: true
    };

    const newState = authReducer(null, action);

    expect(newState).toEqual({
      isAuthed: true
    });
  });
});
