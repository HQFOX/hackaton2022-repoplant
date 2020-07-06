import { AuthActions, setIsAuthed } from "../actions";

describe("auth actions", () => {
  it("set Auth", () => {
    const action = setIsAuthed(true);

    expect(action).toEqual({
      type: AuthActions.SET_IS_AUTHED,
      isAuthed: true
    });
  });
});
