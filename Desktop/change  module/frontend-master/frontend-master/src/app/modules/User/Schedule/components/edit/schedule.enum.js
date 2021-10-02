import { countriesCode } from "../../../../../helpers/countries-setting.enum";
import { timeZones } from "../../../../../helpers/time-zones";
const scheduleTypeDevicePrefixOptions = [
  { label: "desktop", value: "desktop" },
  { label: "Android Smart Phone", value: "androidSmartPhone" },
  { label: "Windows Smart Phone", value: "windowsSmartPhone" },
  { label: "Ios Smart Phone", value: "iosSmartPhone" },
  { label: "Gigaset Device", value: "gigasetDevice" },
  { label: "Other Ip Device", value: "otherIpDevice" }
];
const TimeZonePrefixOptions = timeZones;
const countryCodePrefixOptions = countriesCode;
export {
  scheduleTypeDevicePrefixOptions,
  TimeZonePrefixOptions,
  countryCodePrefixOptions
};
