import { USER_LOGIN, USER_LOGOUT } from './constants';

let initialState = localStorage.getItem('auth')
  ? JSON.parse(localStorage.getItem('auth'))
  : { username: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        username: action.username,
        notable: action.notable,
        token: action.token,
      };
    case USER_LOGOUT:
      return { username: null, notable: null, token: null };
    default:
      return state;
  }
}
