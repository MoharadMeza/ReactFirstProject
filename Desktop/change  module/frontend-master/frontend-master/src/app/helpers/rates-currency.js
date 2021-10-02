import countriesJson from "./json/countries.json";
let currencyFlag = [];
countriesJson.forEach(item => {
  let obj = {};
  obj.value = item.currency.toLowerCase();
  obj.label = item.currency.toUpperCase();
  obj.icon = item.flag;
  currencyFlag.push(obj);
});
export { currencyFlag };
