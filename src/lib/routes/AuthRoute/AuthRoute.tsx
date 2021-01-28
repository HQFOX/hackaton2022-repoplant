import React, { useContext } from "react";
import { RouteProps } from "react-router";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "lib/context/AuthContext";

interface AuthProps extends RouteProps {
  redirect?: string;
}

const AuthRoute: React.FC<AuthProps> = ({
  path,
  exact,
  redirect,
  component,
}: AuthProps) => {
  const { isAuthed } = useContext(AuthContext);
  const isLogin = path === "/login";
  const route = <Route path={path} exact={exact} component={component} />;

  if (redirect) return <Redirect to={redirect} />;

  if (!isAuthed) {
    if (isAuthed === null || isAuthed === undefined) return null;
    return isLogin ? route : <Redirect to="/login" />;
  }

  return isLogin ? <Redirect to="/" /> : route;
};

export default AuthRoute;
