import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
});

apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('_auth');
  const tokenType = localStorage.getItem('_auth_type');
  if (token) {
    config.headers['Authorization'] = `${tokenType} ${token}`;
  }
  return config;
});

const apiPath = {
  signin: `/user/login`, // /auth/signin
  signup: `/user/register`, // /auth/signup
  refreshToken: `/user/refresh-token`, // /auth/refresh-token
  getHistory: `/user/get-history`,
  articles: `/articles`,
};

export { apiClient, apiPath };
