import React, { Suspense } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { lazy } from "@loadable/component";
import NotFound from "pages/NotFound";
import history from "lib/utils/history";
import AuthRoute from "./AuthRoute";

const Login = lazy(() => import("pages/Login"));
const Overview = lazy(() => import("pages/Overview"));
const Characters = lazy(() => import("pages/Characters"));
const CharacterDetails = lazy(() => import("pages/CharacterDetails"));
const Planets = lazy(() => import("pages/Planets"));

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Router history={history}>
      <Switch>
        <AuthRoute path="/" exact redirect="/overview" />
        <AuthRoute path="/overview" component={Overview} />
        <AuthRoute path="/login" exact component={Login} />
        <AuthRoute path="/star-wars" exact redirect="/star-wars/home" />
        <AuthRoute path="/star-wars/characters" exact component={Characters} />
        <AuthRoute
          path="/star-wars/characters/:id"
          exact
          component={CharacterDetails}
        />
        <AuthRoute path="/star-wars/planets" exact component={Planets} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Suspense>
);

export default Routes;
