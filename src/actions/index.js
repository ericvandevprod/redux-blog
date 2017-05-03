import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
  const ROOT_URI = 'http://reduxblog.herokuapp.com/api';
  const API_KEY = '?key=PAOPERCLIP';
  const request = axios.get(`${ROOT_URI}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}