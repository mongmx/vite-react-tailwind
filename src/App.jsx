import { AuthProvider } from 'react-auth-kit'
import RoutesComponent from './components/Routes'
import './App.css'

function App() {
  return (
    <AuthProvider
      authType={'cookie'}
      authName={'_auth'}>
      {/* cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}> */}
      <RoutesComponent/>
    </AuthProvider>
  )
}

export default App
