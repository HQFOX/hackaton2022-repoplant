import React from "react";
import { Route, Switch } from "react-router";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import Home from "pages/Home";
import Details from "pages/Details";
import AuthRoute from "./AuthRoute";

const Routes = () => (
  <Switch>
    <AuthRoute path="/" exact redirect="/overview" />
    <AuthRoute path="/overview" component={Home} />
    <AuthRoute path="/login" exact component={Login} />
    <AuthRoute path="/templates" exact redirect="/templates/home" />
    <AuthRoute path="/templates/home" exact component={Home} />
    <AuthRoute path="/templates/details" exact component={Details} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
