import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URI = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAOPERCLIP';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URI}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, redirect) {
  const request = axios.post(`${ROOT_URI}/posts/${API_KEY}`, values)
      .then(() => redirect());

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URI}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id, redirect) {
  const request = axios.delete(`${ROOT_URI}/posts/${id}${API_KEY}`)
      .then(() => redirect());

  return {
    type: DELETE_POST,
    payload: id
  }
}