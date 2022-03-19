import { Route, Switch } from "wouter";

import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import Users from "../pages/Users";

const Content = () => {
  return (
    <>
      <Switch>
        <Route path="/">
          <Dashboard />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </>
  );
}

export default Content;