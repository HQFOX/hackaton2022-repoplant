import React from "react";
import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import AuthRoute from "./AuthRoute";

const NotFound = loadable(() => import("pages/NotFound"));
const Login = loadable(() => import("pages/Login"));
const Overview = loadable(() => import("pages/Overview"));
const Characters = loadable(() => import("pages/Characters"));
const CharacterDetails = loadable(() => import("pages/CharacterDetails"));
const Starships = loadable(() => import("pages/Starships"));

const Routes = () => (
  <Switch>
    <AuthRoute path="/" exact redirect="/overview" />
    <AuthRoute path="/overview" component={Overview} />
    <AuthRoute path="/login" exact component={Login} />
    <AuthRoute path="/star-wars" exact redirect="/star-wars/characters" />
    <AuthRoute path="/star-wars/characters" exact component={Characters} />
    <AuthRoute
      path="/star-wars/characters/:id"
      exact
      component={CharacterDetails}
    />
    <AuthRoute path="/star-wars/starships" exact component={Starships} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
