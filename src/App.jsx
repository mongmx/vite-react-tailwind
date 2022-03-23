import { AuthProvider, createRefresh } from 'react-auth-kit'
import RoutesComponent from './components/Routes'
import './App.css'

const refreshApi = createRefresh({
  interval: 1,
  refreshApiCallback: param => {
    console.log(param)
    return {
      isSuccess: true,
      newAuthToken: 'fsdgedgd',
      newAuthTokenExpireIn: 10,
      newRefreshTokenExpiresIn: 60
    }
  }
})

function App() {
  return (
    <AuthProvider
      authType={'localstorage'}
      authName={'_auth'}
      refresh={refreshApi}>
      {/* cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}> */}
      <RoutesComponent/>
    </AuthProvider>
  )
}

export default App
