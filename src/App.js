import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import PrivateRoute from "components/Auth/PrivateRoute";
import AdminLayout from "layouts/Admin.js";
import { TokenContext } from "shared/context/token";

export default function App() {
  const [data, setData] = useState({});
  return (
    <TokenContext.Provider value={{ data, setToken: setData }}>
      <BrowserRouter>
        <Switch>
          <Route path={`/auth`} component={AuthLayout} />
          <PrivateRoute>
            <Route path={`/admin`} component={AdminLayout} />
          </PrivateRoute>
          {/* <Route path={`/rtl`} component={RTLLayout} /> */}
          <Redirect from={`/`} to="/admin/dashboard" />
        </Switch>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}
