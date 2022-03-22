import {
  Outlet
} from "react-router-dom";
// import { Route, Switch } from "wouter";
// import routes from '../Routes';
// import Dashboard from "../pages/Dashboard";
// import Products from "../pages/Products";
// import Orders from "../pages/Orders";
// import Users from "../pages/Users";

const Content = () => {
  return (
    <>
      {/* <Switch>
        {routes.map((route) => (
          <Route path={route.path} key={route.path}>
            {route.component}
          </Route>
        ))}
      </Switch> */}
      <Outlet />
    </>
  );
}

export default Content;
