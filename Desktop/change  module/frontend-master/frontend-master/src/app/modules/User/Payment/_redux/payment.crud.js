import axios from "axios";
import { transformQueryParams } from "../../../../helpers/transformQueryParams";

/* change module */
export const MODULE_URL = `${process.env.REACT_APP_API_URL}/payment/user`;
export const MODULE_CAPTURRELASTCHARGE = `${process.env.REACT_APP_API_URL}/payment`;

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

export function getRecordByIdCaptureCharge(dataId) {
  return axios.get(`${MODULE_CAPTURRELASTCHARGE}/${dataId}`);
}
