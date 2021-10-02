import countriesJson from "./json/countries.json";
let countriesCurrency = [];
let countriesCode = [];
let countriesFlag = [];

countriesJson.forEach(item => {
  let obj = {};
  obj.value = item.currency;
  obj.label = `${item.currency} (${item.country})`;
  obj.icon = item.flag;
  countriesCurrency.push(obj);
});

countriesJson.forEach(item => {
  let obj = {};
  obj.value = item.countryCode;
  obj.label = `${item.countryCode} (${item.country})`;
  obj.icon = item.flag;
  countriesCode.push(obj);
});

countriesJson.forEach(item => {
  let obj = {};
  obj.value = item.country;
  obj.label = `${item.country}`;
  obj.icon = item.flag;
  countriesFlag.push(obj);
});

export { countriesCurrency, countriesCode, countriesFlag };
