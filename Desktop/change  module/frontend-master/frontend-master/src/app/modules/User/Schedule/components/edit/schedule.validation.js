import * as Yup from "yup";
const DataSchemaForm = Yup.object().shape({
  typeOfDevice: Yup.string().required("This field is required"),
  preferredDay: Yup.date().required("This field is required"),
  timezone: Yup.string().required("This field is required"),
  countryCode: Yup.string().required("This field is required"),
  phoneNumber: Yup.number().required("This field is required"),
  email: Yup.string().required("This field is required"),
  skypeUser: Yup.string().required("This field is required"),
  note: Yup.string()
    .min(10, "atleast 10 character is required")
    .required("This field is required")
});
export { DataSchemaForm };
