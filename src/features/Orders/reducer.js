import {
  START_FETCHING_ORDER,
  ERROR_FETCHING_ORDER,
  SUCCESS_FETCHING_ORDER,
  NEXT_PAGE,
  PREV_PAGE,
  SET_PAGE,
} from './constants';

const statuslist = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error',
};

const initialState = {
  data: [],
  currentPage: 1,
  totalItems: -1,
  perPage: 10,
  status: statuslist.idle,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_ORDER:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_ORDER:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_ORDER:
      return {
        ...state,
        status: statuslist.success,
        data: action.data,
        totalItems: action.count,
      };

    case SET_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case NEXT_PAGE:
      return { ...state, currentPage: state.currentPage + 1 };

    case PREV_PAGE:
      return { ...state, currentPage: state.currentPage - 1 };

    default:
      return state;
  }
}
