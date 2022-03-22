import { RequireAuth } from 'react-auth-kit'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/auth/Login'
import Welcome from '../pages/Welcome'
import LayoutSidebar from './LayoutSidebar'
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Welcome />} />
        <Route path={'login'} element={<Login />} />
        {/* <Route path='x'>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
        </Route> */}
        {/* <Route path={'/app'} element={<LayoutSidebar />} /> */}
        {/* <Route path={'app'} element={
          <RequireAuth loginPath={'/login'}> */}
        <Route path={'app'} element={<LayoutSidebar />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
      {/* <Routes>
              <Route element={
                <RequireAuth loginPath={'/login'}>
                  <Route>
                    <Route index element={<Dashboard />} />
                    <Route path="/app/products" element={<Products />} />
                  </Route>
                </RequireAuth>
              } />
            </Routes> */}
    </BrowserRouter >
  )
}

export default RoutesComponent
