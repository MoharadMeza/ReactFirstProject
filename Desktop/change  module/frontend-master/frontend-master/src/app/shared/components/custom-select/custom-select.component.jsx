import React from "react";
import Select from "react-select";
import selectStyle from "./custom-select.style";

const CustomSelect = ({
  options,
  value,
  showFlag,
  customStyles = {},
  customOptionStyles = {},
  customSingleValueStyles = {},
  isFocused,
  ...props
}) => {
  const selectStyles = selectStyle(
    isFocused,
    customStyles,
    customOptionStyles,
    customSingleValueStyles
  );
  let defaultValue = options.filter((option) => option.value === value)[0];
  return (
    <Select
      options={options}
      defaultValue={defaultValue}
      styles={selectStyles}
      components={{
        IndicatorSeparator: () => null,
      }}
      {...props}
    />
  );
};

export default CustomSelect;
