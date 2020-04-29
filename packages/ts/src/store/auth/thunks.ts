import { Dispatch } from "redux";
import { authenticate } from "lib/api/auth";
import { AuthCredentials } from "typings/auth";
import { setCookie, removeCookie, getCookie } from "lib/utils/cookie";
import { setAuth } from "./actions";

const login = (credentials: AuthCredentials) => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    const token: string = await authenticate(credentials);
    setCookie({
      key: "token",
      value: token
    });
    dispatch(setAuth(true));
  } catch (error) {
    removeCookie("token");
    dispatch(setAuth(false));
  }
};

const logout = () => async (dispatch: Dispatch): Promise<void> => {
  removeCookie("token");
  dispatch(setAuth(false));
};

const checkAuth = () => async (dispatch: Dispatch): Promise<void> => {
  const token = getCookie("token");
  dispatch(setAuth(Boolean(token)));
};

export { login, logout, checkAuth };
