import React, { useState } from 'react'
import { useIsAuthenticated, useSignIn } from 'react-auth-kit'
import { useNavigate, Navigate } from 'react-router-dom'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import Spinner from '../../components/Spinner';
import { apiClient, apiPath } from '../../api/client';

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Email must be a valid email")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required"),
  passwordConfirmation: Yup.string()
    .required("Password Confirmation is required")
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

function Register() {
  const isAuthenticated = useIsAuthenticated()
  const signIn = useSignIn()
  const navigate = useNavigate()
  const [isSigningUp, setIsSignUpgIn] = useState(false)

  const onSubmit = async (formData) => {
    setIsSignUpgIn(true);
    try {
      apiClient.post(apiPath.signup, formData)
        .then((res) => {
          if (res.status === 201) {
            if (signIn({
              token: res.data.token,
              expiresIn: res.data.expiresIn,
              tokenType: 'Bearer',
              authState: res.data.authState,
              // refreshToken: res.data.refreshToken,                // Only if you are using refreshToken feature
              // refreshTokenExpireIn: res.data.refreshTokenExpireIn // Only if you are using refreshToken feature
            })) {
              toast.success('Successfully!')
              navigate('/app')
            } else {
              toast.error("Error Occoured. Try Again")
            }
          }
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        })
    } catch (err) {
      toast.error(err.response.data.message)
    }
    setIsSignUpgIn(false);
  };

  if (isAuthenticated()) {
    return (
      <Navigate to={'/app'} replace />
    )
  } else {
    return (
      <div className='flex items-center min-h-screen p-6 bg-blue-900 dark:bg-gray-900'>
        <div
          className='flex-1 h-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800'>
          <div className='flex flex-col overflow-y-auto md:flex-row'>
            <main className="flex items-center justify-center p-12 w-full">
              <div className="w-full">
                <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Register
                </h1>
                <Formik
                  initialValues={{
                    email: 'test@test.dev',
                    password: '123456',
                    passwordConfirmation: '123456',
                  }}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
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
                    <label className="mt-4 block">
                      Password Confirmation
                    </label>
                    <Field
                      type="password"
                      name="passwordConfirmation"
                      className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300
                          rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500
                          focus:border-blue-500 sm:text-sm"
                    />
                    <ErrorMessage component="span" name="passwordConfirmation" className="text-red-500" />
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 mt-8 border border-transparent
                          rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      {isSigningUp ? <Spinner animation="border" variant="primary" /> : 'Register'}
                    </button>
                  </Form>
                </Formik>
                <p className="mt-6 text-center text-blue-800">
                  <a href="/login">Login</a>
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
