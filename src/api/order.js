import axios from 'axios';
import { config } from '../config';

export async function getOrders(params) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {};

  return await axios.get(`${config.api_host}/api/orders`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}

export async function createOrder(payload) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {};

  return await axios.post(
    `${config.api_host}/api/orders`,
    { notable: payload },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
}

export async function getOneOrder(params) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {};

  return await axios.get(`${config.api_host}/api/orders/${params}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}
