import React from "react";
import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import { Routes, routeTypes } from "./Routes/Routes";
import PublicRoute from "./Routes/Public/PublicRoute";
import PrivateRoute from "./Routes/Private/PrivateRoute";
import { connect } from "react-redux";

const App = ({ isAuthorized }) => {
  return (
    <BrowserRouter>
      <Switch>
        {Routes.map((route, key) => {
          const { type, component, path } = route;
          return type === routeTypes.PUBLIC ? (
            <PublicRoute
              key={key}
              exact
              component={component}
              isAuthorized={isAuthorized}
              path={path}
            />
          ) : (
            <PrivateRoute
              key={key}
              exact
              component={component}
              isAuthorized={isAuthorized}
              path={path}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = state => {
  return {
    isAuthorized: state.userReducer.isAuthorized
  };
};

export default connect(mapStateToProps)(App);
