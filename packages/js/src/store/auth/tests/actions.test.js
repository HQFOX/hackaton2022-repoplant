import { AuthActions, setAuth } from "../actions";

describe("auth actions", () => {
  it("set Auth", () => {
    const action = setAuth(true);

    expect(action).toEqual({
      type: AuthActions.SET_AUTH,
      isAuthed: true
    });
  });
});
