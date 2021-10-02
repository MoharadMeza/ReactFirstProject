import * as Yup from "yup";

export const ModuleCreateSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email is inValid")
    .required("Email is required"),
  contactHour: Yup.string().required("Time is required"),
  message: Yup.string().required("Message is required"),
  contactPhone: Yup.string()
    .min(5, "Phone lenght must be greater then 5")
    .max(10, "Phone lenght must be smaller then 10")
    .required("Phone is required"),
  typeOfSupport: Yup.string().required("Type of support is required")
});
