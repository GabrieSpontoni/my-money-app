import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";

function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Dashboard} />
        <Route path={"/billingCycles"} component={BillingCycle} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
export default routes;
