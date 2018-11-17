import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENT, CHANGE_AUTH } from './types';

export const saveComment = comment => ({
  type: SAVE_COMMENT,
  payload: comment,
});

export const fetchComment = () => {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');
  return {
    type: FETCH_COMMENT,
    payload: response,
  };
};

export const changeAuth = isLoggedIn => ({
  type: CHANGE_AUTH,
  payload: isLoggedIn,
});
