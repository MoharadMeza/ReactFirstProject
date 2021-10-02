import axios from "axios";

export const LOGIN_URL = `${process.env.REACT_APP_API_URL}/users/login`;
export const REGISTER_URL = `${process.env.REACT_APP_API_URL}/users/register`;
export const REQUEST_PASSWORD_URL = `${process.env.REACT_APP_API_URL}/users/forget-password`;
export const ME_URL = `${process.env.REACT_APP_API_URL}/users/me`;

export function login(email, password) {
  return axios.post(LOGIN_URL, { email, password });
}

export function register(email, password) {
  return axios.post(REGISTER_URL, { email, password });
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(ME_URL);
}
