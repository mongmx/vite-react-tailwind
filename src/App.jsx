import { useState } from 'react'
import { Route, Switch } from "wouter";
import './App.css'
import AppContext from './context/AppContext'
import buildClient from './api/base-client';
import LayoutSidebar from './components/LayoutSidebar'
import LoginPage from './pages/auth/Login';

var currentUser = null;

function App() {
  const [auth, setAuth] = useState({
    isAuthenticated: !!currentUser,
    currentUser,
  });

  return (
    <AppContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {/* <Route path="/login">
        <LoginPage />
      </Route> */}
      <LoginPage />
        {/* <LayoutSidebar /> */}
    </AppContext.Provider>
  )
}

// App.defaultProps = async (appContext) => {
//   console.log('appContext', appContext)
//   const client = buildClient(appContext.ctx);
//   const { data } = await client.get('/api/auth/current-user');
//   console.log('data', data);
//   // let data
//   // try {
//   //   const res = await client.get('/api/auth/current-user');
//   //   data = res.data
//   // } catch (error) {
//   //   data = null
//   // }
//   let pageProps = {};

//   if (appContext.Component.getInitialProps) {
//     pageProps = await appContext.Component.getInitialProps(
//       appContext.ctx,
//       client
//     );
//   }

//   return { ...data, pageProps };
// }

export default App
