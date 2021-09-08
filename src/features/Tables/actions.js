import { GET_TABLES, SET_TABLES } from './constants';
import { getTable } from 'api/table';

export const getTables = () => {
  return {
    type: GET_TABLES,
  };
};

export const setTables = ({ user }) => {
  return {
    type: SET_TABLES,
    user,
  };
};

export const fetchTables = () => {
  return async (dispatch, getState) => {
    dispatch(getTables());

    try {
      let data = await getTable();
    } catch (err) {}
  };
};
