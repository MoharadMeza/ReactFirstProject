const initialValues = {
  profile: {
    name: "",
    countryCode: "",
    telephoneNumber: "",
    language: ""
  },
  locationSettings: {
    timeZone: "",
    country: ""
  },
  currencySettings: {
    currency: "",
    restoreToEUR: ""
  },
  billing: {
    companyName: "",
    registerNumber: "",
    taxNumber: "",
    address: ""
  },
  emailSettings: {
    promotionalEmails: true
  },
  privacySettings: {
    trackingHistory: true
  },

  email: "",

  deleteSmsCheck: "",
  newPassword: "",
  retypeNewPassword: "",
  billingTabCheck: "",
  countryLocalAccess: "",
  phoneNumber: ""
};
export default initialValues;
