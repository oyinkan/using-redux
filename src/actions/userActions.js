import * as types from './actionTypes';
import UsersApi from '../api/UsersApi';

export function loadUsersSuccess(users) {
  return {type: types.LOAD_USERS_SUCCESS, users};
}

export function loadUsers() {
  return function(dispatch) {
    return UsersApi.getAllUsers().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      throw(error);
    });
  };
}