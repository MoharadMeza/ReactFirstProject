import React from "react";
import Select from "react-select";
import IconOption from "./icon-option.component"
import SingleValue from './single-value.component'
import selectStyle from "./select-with-flag.style"

const SelectFlag = ({
  options,
  value,
  customStyles = {},
  customOptionStyles = {},
  customSingleValueStyles = {},
  isFocused,
  ...props
}) => {

  const selectStyles = selectStyle(isFocused,customStyles,customOptionStyles,customSingleValueStyles);
  const defaultValue = options.filter(option => option.value === value)[0];
  return (
    <Select
      defaultValue={defaultValue}
      options={options}
      components={{
        Option: IconOption, SingleValue,
        IndicatorSeparator: () => null,
      }}
      styles={selectStyles}
      {...props}
    />
  );
};

export default SelectFlag;
