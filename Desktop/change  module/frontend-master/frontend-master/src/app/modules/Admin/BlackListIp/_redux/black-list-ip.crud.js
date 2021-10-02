import axios from "axios";
import { transformQueryParams } from "../../../../helpers/transformQueryParams";

/* change module */
export const MODULE_URL = `${process.env.REACT_APP_API_URL}/black-list-ip`;

export function createRecord(data) {
  return axios.post(MODULE_URL, data);
}

export function getAllRecords() {
  return axios.get(MODULE_URL);
}

export function getRecordById(dataId) {
  return axios.get(`${MODULE_URL}/${dataId}`);
}

export function findRecords(queryParams) {
  const transformQueryParamsData = transformQueryParams(queryParams);
  return axios.get(`${MODULE_URL}`, { params: transformQueryParamsData });
}

export function updateRecord(data) {
  return axios.put(`${MODULE_URL}/${data.id}`, data);
}

export function deleteRecord(recordId) {
  return axios.delete(`${MODULE_URL}/${recordId}`);
}

export function deleteRecords(ids) {
  return axios.post(`${MODULE_URL}/deleteRecords`, { ids });
}
