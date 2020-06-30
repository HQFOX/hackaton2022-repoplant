import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "pages/Login";
import Overview from "pages/Overview";
import Home from "pages/Home";
import Details from "pages/Details";
import NotFound from "pages/NotFound";
import AuthRoute from "./AuthRoute";

const Routes = () => (
  <Switch>
    <AuthRoute path="/" exact redirect="/overview" />
    <AuthRoute path="/overview" component={Overview} />
    <AuthRoute path="/login" exact component={Login} />
    <AuthRoute path="/templates" exact redirect="/templates/home" />
    <AuthRoute path="/templates/home" exact component={Home} />
    <AuthRoute path="/templates/details" exact component={Details} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;