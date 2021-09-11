import { LIKED_ITEM, UNLIKED_ITEM } from './constants';

const initialState = localStorage.getItem('liked')
  ? JSON.parse(localStorage.getItem('liked'))
  : [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LIKED_ITEM:
      return [...state, { ...action.item }];

    case UNLIKED_ITEM:
      return state.filter((item) => item._id !== action.item._id);

    default:
      return state;
  }
}
