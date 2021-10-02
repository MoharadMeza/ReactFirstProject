import axios from "axios";
import { transformQueryParams } from "../../../helpers/transformQueryParams";

/* change module */
export const MODULE_URL = `${process.env.REACT_APP_API_URL}/users`;

export function createRecord(data) {
  return axios.post(MODULE_URL, data);
}

export function getAllRecords() {
  return axios.get(`${MODULE_URL}/me`);
}

export function getRecordById() {
  return axios.get(`${MODULE_URL}/me`);
}

export function findRecords(queryParams) {
  const transformQueryParamsData = transformQueryParams(queryParams);
  return axios.get(`${MODULE_URL}`, { params: transformQueryParamsData });
}

export function updateRecord(data) {
  return axios.put(`${MODULE_URL}/profile`, data);
}

export function changePassword(data) {
  return axios.post(`${MODULE_URL}/change-password`, data);
}

export function deleteRecord(recordId) {
  return axios.delete(`${MODULE_URL}/${recordId}`);
}

export function deleteRecords(ids) {
  return axios.post(`${MODULE_URL}/deleteRecords`, { ids });
}
