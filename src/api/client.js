import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export const apiPath = {
  signin: `/auth/signin`,
  signup: `/auth/signup`,
  refreshToken: `/auth/refresh`,
  getHistory: `/auth/get-history`,
};
