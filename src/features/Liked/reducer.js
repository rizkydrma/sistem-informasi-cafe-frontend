import { LIKED_ITEM, UNLIKED_ITEM, SET_ITEMS } from './constants';

const initialState = localStorage.getItem('liked')
  ? JSON.parse(localStorage.getItem('liked'))
  : [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LIKED_ITEM:
      return [...state, { ...action.item }];

    case UNLIKED_ITEM:
      return [...state.filter((item) => item.product._id !== action.item._id)];

    case SET_ITEMS:
      return action.items;

    default:
      return state;
  }
}
