import { LIKED_ITEM, UNLIKED_ITEM } from './constants';

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
