import * as Yup from "yup";

export const ModuleCreateSchema = Yup.object().shape({
  profile: Yup.object().shape({
    name: Yup.string().required("Name is required!")
  }),
  role: Yup.string().required("Role is required"),
  password: Yup.number().required("Password is required"),
  email: Yup.string()
    .email("email is inccorect")
    .required("Email is required")
});
