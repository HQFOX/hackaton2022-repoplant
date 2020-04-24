import { authenticate } from "lib/api/auth";
import { setCookie, removeCookie, getCookie } from "lib/utils/cookie";
import { setAuth } from "./actions";

const login = credentials => async dispatch => {
  try {
    const token = await authenticate(credentials);
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

const logout = () => dispatch => {
  removeCookie("token");
  dispatch(setAuth(false));
};

const checkAuth = () => dispatch => {
  const token = getCookie("token");
  dispatch(setAuth(Boolean(token)));
};

export { login, logout, checkAuth };
