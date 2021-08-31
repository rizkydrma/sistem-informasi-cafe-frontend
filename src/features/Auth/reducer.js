import { USER_LOGIN, USER_LOGOUT } from './constants';

let initialState = localStorage.getItem('auth')
  ? JSON.parse(localStorage.getItem('auth'))
  : { user: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { username: action.username, notable: action.notable };
    case USER_LOGOUT:
      return { username: null, notable: null };
    default:
      return state;
  }
}
