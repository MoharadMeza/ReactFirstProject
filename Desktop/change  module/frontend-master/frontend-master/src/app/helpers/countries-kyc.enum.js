import countriesJson from "./json/countries.json";
let countriesCode = [];
let countries = [];

countriesJson.forEach(item => {
  let obj = {};
  obj.value = item.countryCode;
  obj.label = `${item.country} (${item.countryCode})`;
  obj.icon = item.flag;
  countriesCode.push(obj);
});

countriesJson.forEach(item => {
  let obj = {};
  obj.value = item.country;
  obj.label = item.country;
  countries.push(obj);
});
export { countriesCode, countries };
