import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ checkAuth, auth, path, exact, redirect, component }) => {
  const { isAuthed } = auth;

  const isLogin = path === "/login";
  const route = <Route path={path} exact={exact} component={component} />;

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (redirect) return <Redirect to={redirect} />;

  if (!isAuthed) {
    if (isAuthed === null) return null;
    return isLogin ? route : <Redirect to="/login" />;
  }

  return isLogin ? <Redirect to="/" /> : route;
};

export default AuthRoute;
