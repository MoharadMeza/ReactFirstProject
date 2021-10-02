import {
  countriesCode,
  countriesFlag,
  countriesCurrency
} from "../../../../helpers/countries-setting.enum";
import { timeZones } from "../../../../helpers/time-zones";
const languagePrefixOptions = [
  { label: "Farsi", value: "fa" },
  { label: "Japan", value: "japan" },
  { label: "English", value: "en" },
  { label: "Arabic", value: "Arabic" }
];

const telphoneNumPrefixOptions = countriesCode;
const countryPrefixOptions = countriesFlag;

const currencyCountryPrefixOptions = countriesCurrency;

const timeZonePrefixOptions = timeZones;

const countryLocalAccessPrefixOptions = [
  { icon: "001-austria.svg", label: "Austria", value: "local1" },
  { icon: "001-mauritius.svg", label: "Mauritius", value: "local2" },
  { icon: "002-belgium.svg", label: "Belgium", value: "local3" },
  { icon: "003-switzerland.svg", label: "Switzerland", value: "local4" }
];
export {
  languagePrefixOptions,
  currencyCountryPrefixOptions,
  timeZonePrefixOptions,
  telphoneNumPrefixOptions,
  countryLocalAccessPrefixOptions,
  countryPrefixOptions
};
