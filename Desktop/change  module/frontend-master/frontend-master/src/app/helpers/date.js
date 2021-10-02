export const datoToLocal = dateTimeUTC => {
  return new Date(dateTimeUTC).toLocaleString();
};
