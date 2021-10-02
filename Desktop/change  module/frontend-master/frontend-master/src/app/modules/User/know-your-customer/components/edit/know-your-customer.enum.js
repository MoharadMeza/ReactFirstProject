import {
  countriesCode,
  countries
} from "../../../../../helpers/countries-kyc.enum";
const genderPrefixOptions = [
  { label: "male", value: "male" },
  { label: "female", value: "female" },
  { label: "none", value: "none" }
];
const nationalPrefixOptions = countries;
const countryPrefixOptions = countries;
const addProofPrefixOptions = [
  { label: "latest Telephone Bill", value: "latestTelephoneBill" }
];

const occupationTypePrefixOptions = [
  { label: "privateSector", value: "privateSector" },
  { label: "publicSector", value: "publicSector" },
  { label: "business", value: "business" },
  { label: "professional", value: "professional" },
  { label: "student", value: "student" }
];
const organaziCountPrefixOptions = countries;
const homeTelPrefixOptions = countriesCode;
const businessTelPrefixOptions = countriesCode;
const idTypePrefixOptions = [
  { label: "passport", value: "passport" },
  { label: "drivingLicense", value: "drivingLicense" }
];
export {
  genderPrefixOptions,
  nationalPrefixOptions,
  countryPrefixOptions,
  addProofPrefixOptions,
  occupationTypePrefixOptions,
  organaziCountPrefixOptions,
  homeTelPrefixOptions,
  idTypePrefixOptions,
  businessTelPrefixOptions
};
