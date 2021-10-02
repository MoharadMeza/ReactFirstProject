import countriesJson from "./json/countries.json";
let countriesCode = [];
let countriesFlag = [];
let countriesCurrency = [];

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
  obj.icon = item.flag;
  countriesFlag.push(obj);
});

countriesJson.forEach(item => {
  let obj = {};
  obj.value = item.currency.toLocaleLowerCase();
  obj.label = item.country;
  obj.icon = item.flag;
  countriesCurrency.push(obj);
});
export { countriesCode, countriesFlag, countriesCurrency };
