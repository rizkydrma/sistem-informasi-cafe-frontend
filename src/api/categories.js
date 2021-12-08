import axios from 'axios';
import { config } from '../config';

export async function getCategories(params) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {};
  return await axios.get(`${config.api_host}/api/categories`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
    params,
  });
}
