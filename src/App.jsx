import { AuthProvider, createRefresh } from 'react-auth-kit'
import { ToastContainer } from 'react-toastify';
import RoutesComponent from './components/RoutesComp'
import 'react-toastify/dist/ReactToastify.css';
import { apiClient, apiPath } from './api/client';

const refreshApi = createRefresh({
  interval: 5,
  refreshApiCallback: ({ authToken, refreshToken }) => {
    return new Promise((resolve, reject) => {
      apiClient.post(apiPath.refreshToken,
        { refreshToken, oldAuthToken: authToken }
      ).then((res) => {
        resolve({
          isSuccess: true,
          newAuthToken: res.data.token,
          newAuthTokenExpireIn: res.data.expiresIn,
          newRefreshToken: res.data.refreshToken,
          newRefreshTokenExpiresIn: res.data.refreshTokenExpiresIn,
          newAuthUserState: res.data.authState
        })
      }).catch((e) => {
        reject({
          isSuccess: false
        })
      })
    })
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
