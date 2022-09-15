import { RequireAuth } from 'react-auth-kit'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Welcome from '../pages/Welcome'
import NotFound from '../pages/NotFound'
import LayoutSidebar from './LayoutSidebar'

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="a/" element={<Welcome />} />
        <Route path="a/login" element={<Login />} />
        <Route path="a/register" element={<Register />} />
        <Route path="a/app/*" element={
          <RequireAuth loginPath={'a/login'}>
            <LayoutSidebar />
          </RequireAuth>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  )
}

export default RoutesComponent
