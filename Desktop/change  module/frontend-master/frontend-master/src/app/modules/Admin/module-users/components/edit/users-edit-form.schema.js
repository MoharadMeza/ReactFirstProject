import * as Yup from "yup";

export const ModuleEditSchema = Yup.object().shape({
  profile: Yup.object().shape({
    name: Yup.string()
      .nullable()
      .required("Name is required")
  }),
  email: Yup.string()
    .email("Email is not correct")
    .required("Email is required")
});
