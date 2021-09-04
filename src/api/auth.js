import axios from 'axios';
import { config } from '../config';

export async function registerUser(data) {
  return await axios.post(`${config.api_host}/auth/register`, data);
}

export async function login(email, password) {
  return await axios.post(`${config.api_host}/auth/login`, {
    email,
    password,
  });
}

export async function logout() {
  let auth = localStorage.getItem('auth');

  if (!auth) {
    return JSON.parse({
      error: 1,
      message: 'User not found',
    });
  }

  localStorage.removeItem('auth');

  return JSON.parse({
    error: 0,
    message: 'Logout berhasil',
  });
}
