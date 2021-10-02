import * as Yup from "yup";
const DataSchemaForm1 = Yup.object().shape({
  firstName: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  middleName: Yup.string().required("This field is required"),
  gender: Yup.string().required("This field is required"),
  nationality: Yup.string().required("This field is required")
});
const DataSchemaForm2 = Yup.object().shape({
  address: Yup.string()
    .min(4, "Minimum 4 character is required")
    .required("This field is required"),
  city: Yup.string()
    .min(4, "Minimum 4 character is required")
    .required("This field is required"),
  postalCode: Yup.number()
    .moreThan(10000000, "Minimum 8 character is required")
    .required("This field is required"),
  state: Yup.string()
    .min(4, "Minimum 4 character is required")
    .required("This field is required"),
  email: Yup.string().required("This field is required"),
  country: Yup.string().required("This field is required"),
  addressProofType: Yup.string().required("This field is required"),
  addressProofFile: Yup.string().required("This field is required"),
  businessCountryCode: Yup.string().required("This field is required"),
  phoneCountryCode: Yup.string().required("This field is required"),
  homeTelephone: Yup.number()
    .moreThan(10000000, "Minimum 8 character is required")
    .required("This field is required"),
  businessTelephone: Yup.number()
    .moreThan(10000000, "Minimum 8 character is required")
    .required("This field is required")
});
const DataSchemaForm3 = Yup.object().shape({
  occupationType: Yup.string().required("This field is required"),
  occupationDetails: Yup.string()
    .min(3, "Minimum 3 character is required")
    .nullable(),
  organizationName: Yup.string()
    .min(3, "Minimum 3 character is required")
    .nullable(),
  organizationPosition: Yup.string()
    .min(3, "Minimum 3 character is required")
    .nullable(),
  organizationAddress: Yup.string()
    .min(4, "Minimum 9 character is required")
    .nullable(),
  organizationCity: Yup.string()
    .min(4, "Minimum 5 character is required")
    .nullable(),
  organizationPostalCode: Yup.number()
    .moreThan(1000000000, "Minimum 10 character is required")
    .nullable(),
  organizationState: Yup.string()
    .min(5, "Minimum 5 character is required")
    .nullable(),
  organizationWebsite: Yup.string()
    .min(4, "Minimum 8 character is required")
    .nullable(),
  organizationCountry: Yup.string()
    .min(4, "Minimum 5 character is required")
    .nullable()
});
const DataSchemaForm4 = Yup.object().shape({
  idType: Yup.string().required("This field is required"),
  idNumber: Yup.number("format is not correct")
    .moreThan(10000000, "Minimum 8 character is required")
    .required("This field is required"),
  birthDate: Yup.date().required("This field is required"),
  checkBox: Yup.string().required("This field is required"),
  idFile: Yup.string().required("This field is required")
});

export { DataSchemaForm1, DataSchemaForm2, DataSchemaForm3, DataSchemaForm4 };
