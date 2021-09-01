import axios from 'axios';
import { config } from '../config';

export async function login(username, notable) {
  return await axios.post(`${config.api_host}/auth/guestlogin`, {
    username,
    notable,
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
