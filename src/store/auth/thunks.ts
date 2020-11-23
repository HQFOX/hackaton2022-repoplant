import { Dispatch } from "redux";
import { authenticate, recoverPassword } from "lib/api/auth";
import { AuthCredentials } from "typings/auth";
import { setCookie, removeCookie, getCookie } from "lib/utils/cookie";
import {
  setActiveForm,
  setIsAuthed,
  setAuthStatus,
  setRecoverStatus
} from "./actions";

const login = (credentials: AuthCredentials) => async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch(setAuthStatus("pending"));
  try {
    const token: string = await authenticate(credentials);
    setCookie({ key: "token", value: token });
    dispatch(setIsAuthed(true));
    dispatch(setAuthStatus("success"));
    setTimeout(() => dispatch(setAuthStatus("idle")), 2000);
  } catch (error) {
    dispatch(setAuthStatus("error"));
    setTimeout(() => dispatch(setAuthStatus("idle")), 2000);
  }
};

const logout = () => async (dispatch: Dispatch): Promise<void> => {
  removeCookie("token");
  dispatch(setIsAuthed(false));
};

const checkAuth = () => dispatch => {
  const token = getCookie("token");
  dispatch(setIsAuthed(Boolean(token)));
};

const recover = email => async dispatch => {
  dispatch(setRecoverStatus("pending"));
  try {
    await recoverPassword(email);
    dispatch(setRecoverStatus("success"));
    setTimeout(() => {
      dispatch(setRecoverStatus("idle"));
      dispatch(setActiveForm("login"));
    }, 2000);
  } catch (error) {
    dispatch(setRecoverStatus("error"));
    setTimeout(() => dispatch(setRecoverStatus("idle")), 2000);
  }
};

export { login, logout, checkAuth, recover };
