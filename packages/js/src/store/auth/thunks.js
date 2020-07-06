import { authenticate, recoverPassword } from "lib/api/auth";
import { setCookie, removeCookie, getCookie } from "lib/utils/cookie";
import {
  setActiveForm,
  setIsAuthed,
  setAuthStatus,
  setRecoverStatus
} from "./actions";

const login = credentials => async dispatch => {
  dispatch(setAuthStatus("pending"));
  try {
    const token = await authenticate(credentials);
    setCookie({
      key: "token",
      value: token
    });
    dispatch(setAuthStatus("success"));
    dispatch(setIsAuthed(true));
    setTimeout(() => {
      dispatch(setAuthStatus("idle"));
    }, 2000);
  } catch (error) {
    dispatch(setAuthStatus("error"));
    setTimeout(() => {
      dispatch(setAuthStatus("idle"));
    }, 2000);
  }
};

const logout = () => dispatch => {
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
    setTimeout(() => {
      dispatch(setRecoverStatus("idle"));
    }, 2000);
  }
};

export { login, logout, checkAuth, recover };
