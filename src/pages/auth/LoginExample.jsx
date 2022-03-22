import { useContext } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
// import AppContext from '../../context/AppContext'
import buildClient from '../../api/base-client';

const validationSchema = Yup.object({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .required(),
});

const LoginPage = () => {
  const { setAuth } = useContext(AppContext);
  const client = buildClient(AppContext);
  // const router = useRouter();
  // const [isSigningIn, setIsSigningIn] = useState(false);

  const onSubmit = async (body) => {
    // setIsSigningIn(true);
    try {
      const { data } = await client.post('/api/auth/signin', body);
      setAuth({ isAuthenticated: true, currentUser: data });
      // toast.success('Successfully!');
      // router.push('/app').then();
    } catch (err) {
      // err.response.data.errors.forEach((err) => toast.error(err.message));
      // toast.error(err.response.data.message);
    }
    // setIsSigningIn(false);
  };

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
                  email: '',
                  password: '',
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
                  {/* <ErrorMessage component={StyledErrorMessage} name="email" /> */}
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
                  {/* <ErrorMessage component={StyledErrorMessage} name="password" /> */}
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
  );
}

export default LoginPage;
