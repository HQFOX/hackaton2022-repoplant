import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "pages/NotFound";
import Login from "pages/Login";
import Overview from "pages/Overview";
import Characters from "pages/Characters";
import CharacterDetails from "pages/CharacterDetails";
import Starships from "pages/Starships";
import AuthRoute from "./AuthRoute";

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
