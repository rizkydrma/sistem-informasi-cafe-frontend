import {
  ADD_ITEM,
  SET_ITEMS,
  CLEAR_ITEMS,
  REMOVE_ITEM,
  DELETE_ITEM,
  ADD_ITEM_FROM_DETAIL,
} from './constants';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      if (state.find((item) => item._id === action.item._id)) {
        return state.map((item) => ({
          ...item,
          qty: item._id === action.item._id ? item.qty + 1 : item.qty,
        }));
      } else {
        return [
          ...state,
          { ...action.item, qty: action.item.qty > 0 ? action.item.qty : 1 },
        ];
      }

    case ADD_ITEM_FROM_DETAIL:
      if (state.find((item) => item._id === action.item._id)) {
        return state.map((item) =>
          item._id === action.item._id ? action.item : item,
        );
      } else {
        return [...state, action.item];
      }

    case REMOVE_ITEM:
      return state
        .map((item) => ({
          ...item,
          qty: item._id === action.item._id ? item.qty - 1 : item.qty,
        }))
        .filter((item) => item.qty > 0);

    case DELETE_ITEM:
      return state.filter((item) => item._id !== action.item._id);

    case CLEAR_ITEMS:
      return [];

    case SET_ITEMS:
      return action.items;

    default:
      return state;
  }
}
