import { USER_LOGOUT, USER_LOGIN } from './constants';

export function userLogin(username, notable) {
  return {
    type: USER_LOGIN,
    username,
    notable,
  };
}

export function userLogout() {
  return {
    type: USER_LOGOUT,
  };
}
