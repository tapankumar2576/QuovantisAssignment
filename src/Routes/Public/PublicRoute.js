import React from "react";
import { Route, Redirect } from "react-router-dom";
import PublicLayout from "../../Layouts/public/PublicLayout";

const PublicRoute = ({ component: Component, isAuthorized, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthorized ? (
          <Redirect to="/users" />
        ) : (
          <PublicLayout>
            <Component {...props} />
          </PublicLayout>
        )
      }
    />
  );
};

export default PublicRoute;
