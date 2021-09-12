import {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEMS,
  SET_ITEMS,
  DELETE_ITEM,
  ADD_ITEM_FROM_DETAIL,
} from './constants';

export function addItem(item) {
  return {
    type: ADD_ITEM,
    item: {
      ...item,
      product: item.product || item,
    },
  };
}

export function addItemFromDetail(item) {
  return {
    type: ADD_ITEM_FROM_DETAIL,
    item: {
      ...item,
      product: item.product || item,
    },
  };
}

export function removeItem(item) {
  return {
    type: REMOVE_ITEM,
    item,
  };
}

export function deleteItem(item) {
  return {
    type: DELETE_ITEM,
    item,
  };
}

export function clearItems() {
  return {
    type: CLEAR_ITEMS,
  };
}

export function setItems(items) {
  return {
    type: SET_ITEMS,
    items,
  };
}
