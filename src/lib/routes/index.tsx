import React, { lazy } from "react";
import { Switch } from "react-router-dom";

import AuthRoute from "./AuthRoute";

const Login = lazy(() => import("pages/Login"));
const Overview = lazy(() => import("pages/Overview"));
const Characters = lazy(() => import("pages/Characters"));
const CharacterDetails = lazy(
  () => import("pages/Characters/CharacterDetails")
);
const Starships = lazy(() => import("pages/Starships"));
const NotFound = lazy(() => import("pages/NotFound"));

const Projects = lazy(() => import("pages/Projects"));
const ProjectDetails = lazy(() => import("pages/Projects/ProjectDetails"));
const Features = lazy(() => import("pages/Features"));
const Knowledge = lazy(() => import("pages/Knowledge"));
const KnowledgeDetails = lazy(() => import("pages/Knowledge/KnowledgeDetails"));

const Routes = () => (
  <Switch>
    <AuthRoute exact path="/login" component={Login} />

    <AuthRoute exact path="/" redirect="/projects" />

    <AuthRoute exact path="/projects" component={Projects} />
    <AuthRoute exact path="/project/:id" component={ProjectDetails} />
    <AuthRoute exact path="/features" component={Features} />
    <AuthRoute exact path="/knowledge" component={Knowledge} />
    <AuthRoute exact path="/knowledge/:id" component={KnowledgeDetails} />

    <AuthRoute component={NotFound} />
  </Switch>
);

export default Routes;
