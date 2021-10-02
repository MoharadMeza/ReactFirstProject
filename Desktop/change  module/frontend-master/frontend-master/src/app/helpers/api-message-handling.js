import { toast } from "react-toastify";

export const errorHandling = error => {
  toast.error(error?.response?.data?.error || "An Error Occur");
  throw error;
};

export const successHandling = type => {
  switch (type) {
    case "create":
    case "update":
      toast.success("Data saved successfully");
      break;

    case "delete":
      toast.success("Data deleted successfully");
      break;

    default:
      break;
  }
};
