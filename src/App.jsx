import { AuthProvider, createRefresh } from 'react-auth-kit'
import RoutesComponent from './components/RoutesComp'
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
  },
  refreshApiErrorCallback: param => {
    console.log(param)
    return {
      isSuccess: false,
      error: 'error'
    }
  }
})

function App() {
  return (
    <AuthProvider
      authType={'localstorage'}
      authName={'_auth'}>
      {/* refresh={refreshApi}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}> */}
      <RoutesComponent/>
    </AuthProvider>
  )
}

export default App
