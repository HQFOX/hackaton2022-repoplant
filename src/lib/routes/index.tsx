import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "pages/Login";
import Overview from "pages/Overview";
import Characters from "pages/Characters";
import Planets from "pages/Planets";
import NotFound from "pages/NotFound";
import AuthRoute from "./AuthRoute";

const Routes = () => (
  <Switch>
    <AuthRoute path="/" exact redirect="/overview" />
    <AuthRoute path="/overview" component={Overview} />
    <AuthRoute path="/login" exact component={Login} />
    <AuthRoute path="/star-wars" exact redirect="/star-wars/home" />
    <AuthRoute path="/star-wars/characters" exact component={Characters} />
    <AuthRoute path="/star-wars/planets" exact component={Planets} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
