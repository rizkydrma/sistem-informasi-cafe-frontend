import { USER_LOGOUT, USER_LOGIN } from './constants';

export function userLogin(username, notable, token) {
  return {
    type: USER_LOGIN,
    username,
    notable,
    token,
  };
}

export function userLogout() {
  return {
    type: USER_LOGOUT,
  };
}
