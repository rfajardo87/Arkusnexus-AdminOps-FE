import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookie from "js-cookie";

export default function PrivateRoute({ children }) {
  const isAuth = Cookie.get("isAuth") || false;

  return (
    <Route
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/auth/signin", state: { from: location } }}
          />
        )
      }
    />
  );
}
