import { AuthProvider, createRefresh } from 'react-auth-kit'
import { ToastContainer } from 'react-toastify';
import RoutesComponent from './components/RoutesComp'
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer
        theme='colored'
        position='top-center'
        autoClose='5000'
        closeOnClick='true'
        pauseOnHover='true'
      />
      <RoutesComponent />
    </AuthProvider>
  )
}

export default App
