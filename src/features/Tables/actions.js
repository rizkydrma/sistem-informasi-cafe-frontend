import { GET_TABLES, SET_TABLES } from './constants';

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
