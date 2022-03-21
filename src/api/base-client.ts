import axios from 'axios';

const buildClient = (context: any) => {
  const client = axios.create({
    baseURL: 'http://localhost:8080'
  })
  try {
    client.defaults.headers = context.req.headers
  } catch (e) {}
  return client
}

export default buildClient;
