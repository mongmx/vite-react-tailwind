import React from 'react'
import { useIsAuthenticated, useSignIn } from 'react-auth-kit'
import { useNavigate, Navigate } from 'react-router-dom'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .required(),
});

const Login = () => {
  const isAuthenticated = useIsAuthenticated()
  const signIn = useSignIn()
  const navigate = useNavigate()

  /**
   * Login Handle, the callback function onClick from the "Login" button
   *
   * This function demostrate a dummy authentication, using useSignIn function
   */
  const loginHandler = () => {
    // Assuming that, all network Request is successfull, and the user is authenticated

    if (signIn({
      token: '35v3443bn368367n306306wbn407qn420b436b4', //Just a random token
      tokenType: 'Bearer',    // Token type set as Bearer
      authState: { name: 'React User', uid: 123456 },   // Dummy auth user state
      expiresIn: 120  // Token Expriration time, in minutes
    })) {
      // If Login Successfull, then Redirect the user to secure route
      navigate('/app')
    } else {
      // Else, there must be some error. So, throw an error
      alert("Error Occoured. Try Again")
    }
  }
  console.log(isAuthenticated())
  if (isAuthenticated()) {
    // If authenticated user, then redirect to secure dashboard

    return (
      <Navigate to={'/app'} replace />
    )
  } else {
    // If not authenticated, use the login flow
    // For Demostration, I'm using just a button to login.
    // In reality, there should be a form, validation, nwetowrk request and other things
    return (
      <div className='flex items-center min-h-screen p-6 bg-blue-900 dark:bg-gray-900'>
        <div
          className='flex-1 h-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800'>
          <div className='flex flex-col overflow-y-auto md:flex-row'>
            <main className="flex items-center justify-center p-12 w-full">
              <div className="w-full">
                <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Login
                </h1>
                <Formik
                  initialValues={{
                    email: 'test@test.dev',
                    password: '123456',
                  }}
                  validationSchema={validationSchema}
                  onSubmit={loginHandler}
                >
                  <Form>
                    <label className="mt-4 block">
                      Email</label>
                    <Field
                      type="email"
                      name="email"
                      className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300
                        rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500
                        focus:border-blue-500 sm:text-sm"
                    />
                    <ErrorMessage component="span" name="email" className="text-red-500" />
                    <label className="mt-4 block">
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300
                        rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500
                        focus:border-blue-500 sm:text-sm"
                    />
                    <ErrorMessage component="span" name="password" className="text-red-500" />
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 mt-8 border border-transparent
                        rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Login
                    </button>
                  </Form>
                </Formik>
              </div>
            </main>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
