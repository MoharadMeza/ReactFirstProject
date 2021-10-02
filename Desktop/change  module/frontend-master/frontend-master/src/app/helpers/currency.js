import countriesJson from "./json/countries.json";

let currencyUnique = [
  ...new Set(countriesJson.map(data => data.currency.trim()))
];
let allCurrency = [];
currencyUnique.forEach(item => {
  let flag = {};
  let obj = {};
  if (!flag[item]) {
    flag[item] = true;
    obj.value = item.toUpperCase();
    obj.label = item.toUpperCase();
    allCurrency.push(obj);
  }
});

export { allCurrency };
