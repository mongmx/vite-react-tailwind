import { createContext, useRef, useEffect } from 'react';
import axios from 'axios';

export const AxiosContext = createContext({
  setAuthHeader: () => { }
});
export const AxiosInstanceProvider = ({
  config = {},
  requestInterceptors = [],
  responseInterceptors = [],
  children,
}) => {
  const instanceRef = useRef(axios.create(config));
  useEffect(() => {
    requestInterceptors.forEach((interceptor) => {
      instanceRef.current.interceptors.request.use(
        interceptor
      );
    });
    responseInterceptors.forEach((interceptor) => {
      instanceRef.current.interceptors.response.use(
        interceptor
      );
    });
  }, []);
  const setAuthHeader = (token) => {
    instanceRef.current.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  return (
    <AxiosContext.Provider value={instanceRef.current}>
      {children}
    </AxiosContext.Provider>
  );
};
