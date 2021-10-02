function GenerateArray(object) {
  let arr = [];
  const keys = Object.keys(object);
  const values = Object.values(object);
  keys.forEach((item, index) => {
    let obj = {};
    obj.name = item;
    if (values[index].responseTime) {
      obj.ping = Math.round(values[index].responseTime);
      obj.app_name = values[index].systemStatus.data.name;
      obj.version = values[index].systemStatus.data.appVersion;
      obj.caching = values[index].systemStatus.data.services.redis;
      obj.database = values[index].systemStatus.data.services.mongo;
    } else {
      obj.system_status = false;
    }
    arr.push(obj);
  });
  return arr;
}

export { GenerateArray };
