import React from "react";
import { Route, Redirect } from "react-router-dom";
import PrivateLayout from "../../Layouts/private/PrivateLayout";

const PrivateRoute = ({ component: Component, isAuthorized, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthorized ? (
          <PrivateLayout>
            <Component {...props} />
          </PrivateLayout>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
