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
        <Route path="/" element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="app/*" element={
          <RequireAuth loginPath={'/login'}>
            <LayoutSidebar />
          </RequireAuth>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  )
}

export default RoutesComponent
