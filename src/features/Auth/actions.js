import { USER_LOGOUT, USER_LOGIN } from './constants';

export function userLogin(user, token) {
  return {
    type: USER_LOGIN,
    user,
    token,
  };
}

export function userLogout() {
  return {
    type: USER_LOGOUT,
  };
}
