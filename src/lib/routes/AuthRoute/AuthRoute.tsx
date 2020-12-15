import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthRouteProps } from "./index";

interface AuthProps extends AuthRouteProps {
  path?: string;
  exact?: boolean;
  redirect?: string;
  component?: React.ComponentType<{}>;
}

const AuthRoute: React.FC<AuthProps> = ({
  checkAuth,
  auth,
  path,
  exact,
  redirect,
  component
}: AuthProps) => {
  const { isAuthed } = auth;

  const isLogin = path === "/login";
  const route = <Route path={path} exact={exact} component={component} />;
  
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (redirect) return <Redirect to={redirect} />;

  if (!isAuthed) {
    if (isAuthed === null || isAuthed === undefined) return null;
    return isLogin ? route : <Redirect to="/login" />;
  }

  return isLogin ? <Redirect to="/" /> : route;
};

export default AuthRoute;
