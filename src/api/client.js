import axios from 'axios'

// const buildClient = (context) => {
//   const client = axios.create({
//     baseURL: 'http://localhost:8080'
//   })
//   try {
//     client.defaults.headers = context.req.headers
//   } catch (e) {}
//   return client
// }

// export default buildClient;

export const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export const apiPath = {
  signin: `/auth/signin`,
  signup: `/auth/signup`,
  fetchTrending: `/trending/all/week`,
};
