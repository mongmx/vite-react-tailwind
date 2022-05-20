import { AuthProvider, createRefresh } from 'react-auth-kit'
import { ToastContainer } from 'react-toastify';
import RoutesComponent from './components/RoutesComp'
import 'react-toastify/dist/ReactToastify.css';
import { apiClient, apiPath } from './api/client';

const refreshApi = createRefresh({
  interval: 1,
  refreshApiCallback: param => {
    console.log(param)
    // return new Promise((resolve, reject) => {
    //   resolve({
    //     isSuccess: true,
    //     newAuthToken: 'fsdgedgd',
    //     newAuthTokenExpireIn: 1,
    //     newRefreshTokenExpiresIn: 2
    //   })
    // })
    apiClient.post(apiPath.refreshToken,
      {
        refreshToken: "refreshToken",
        oldAuthToken: "authToken"
      }
    ).then((res) => {
      return {
        // As the request is successful, we are passing new tokens.
        isSuccess: true,  // For successful network request isSuccess is true
        // newAuthToken: data.newAuthToken,
        // newAuthTokenExpireIn: data.newAuthTokenExpireIn
        newAuthToken: res.data.token,
        newAuthTokenExpireIn: 1,
        // You can also add new refresh token ad new user state
        newAuthUserState: res.data.authState
      }
    }).catch((e) => {
      console.error(e)
      return {
        isSuccess: false
      }
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
