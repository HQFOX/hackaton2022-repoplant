import React from "react";
import { Route, Switch } from "react-router";
import Login from "pages/Login";
import Overview from "pages/Overview";
import NotFound from "pages/NotFound";
import AuthRoute from "./AuthRoute";

const Routes = () => (
  <Switch>
    <AuthRoute path="/" exact redirect="/overview" />
    <AuthRoute path="/overview" component={Overview} />
    <AuthRoute path="/login" exact component={Login} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
