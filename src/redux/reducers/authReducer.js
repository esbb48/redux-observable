import produce from 'immer';
import types from '../actionTypes';
import { authState } from './initialState';

const authReducer = produce((state, { type, payload }) => {
  switch (type) {
    case types.GET_LIST_SUCCESS:
      state.users = payload.items;
      break;
    default:
      break;
  }
}, authState);

export default authReducer;
