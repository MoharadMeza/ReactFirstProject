import Axios from "axios";

function uploadFile(data) {
  return Axios.post(`${process.env.REACT_APP_API_URL}/uploads`, data);
}

export { uploadFile };
