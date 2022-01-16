import {
  ERROR_FETCHING_ORDER,
  NEXT_PAGE,
  PREV_PAGE,
  SET_PAGE,
  START_FETCHING_ORDER,
  SUCCESS_FETCHING_ORDER,
} from './constants';

import { getOrders } from 'api/order';
import debounce from 'debounce-promise';

export const startFetchingOrders = () => {
  return {
    type: START_FETCHING_ORDER,
  };
};

export const errorFetchingOrders = () => {
  return {
    type: ERROR_FETCHING_ORDER,
  };
};

export const successFetchingOrders = ({ data, count }) => {
  return {
    type: SUCCESS_FETCHING_ORDER,
    data,
    count,
  };
};

let debounceFetchOrders = debounce(getOrders, 1000);

export const fetchOrders = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingOrders());

    let perPage = getState().orders.perPage || 2;
    let currentPage = getState().orders.currentPage || 1;

    const params = {
      limit: perPage,
      skip: currentPage * perPage - perPage,
    };

    try {
      let {
        data: { data, count },
      } = await debounceFetchOrders(params);
      dispatch(successFetchingOrders({ data, count }));
    } catch (err) {
      dispatch(errorFetchingOrders());
    }
  };
};

export const setPage = (number = 1) => {
  return {
    type: SET_PAGE,
    currentPage: number,
  };
};

export const goToNextPage = () => {
  return {
    type: NEXT_PAGE,
  };
};

export const goToPrevPage = () => {
  return {
    type: PREV_PAGE,
  };
};
