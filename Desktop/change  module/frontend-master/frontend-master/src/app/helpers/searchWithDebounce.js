import LodashDebounce from "lodash/debounce";

export const searchWithDebounce = LodashDebounce(submit => {
  submit();
}, 1000);
