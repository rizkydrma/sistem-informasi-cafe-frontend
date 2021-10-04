import { LIKED_ITEM, UNLIKED_ITEM, SET_ITEMS } from './constants';

export function likedItem(item) {
  return {
    type: LIKED_ITEM,
    item: {
      ...item,
      product: item.product || item,
    },
  };
}

export function unlikedItem(item) {
  return {
    type: UNLIKED_ITEM,
    item,
  };
}

export function setItems(items) {
  return {
    type: SET_ITEMS,
    items,
  };
}
