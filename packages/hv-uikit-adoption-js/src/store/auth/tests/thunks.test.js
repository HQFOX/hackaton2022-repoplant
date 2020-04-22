import { mockStore } from "lib/utils/tests";
import { login, logout, checkAuth } from "../thunks";
import { AuthActions } from "../actions";

describe("async actions", () => {
  it("should dispatch setAuth when login", async () => {
    const expectedActions = [{ type: AuthActions.SET_AUTH, isAuthed: true }];

    const store = mockStore();
    await store.dispatch(login("some_credentials"));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should dispatch setAuth when logout", async () => {
    const expectedActions = [{ type: AuthActions.SET_AUTH, isAuthed: false }];

    const store = mockStore();
    await store.dispatch(logout(logout));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should dispatch setAuth when checkAuth", async () => {
    const expectedActions = [{ type: AuthActions.SET_AUTH, isAuthed: false }];

    const store = mockStore();
    await store.dispatch(checkAuth());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
