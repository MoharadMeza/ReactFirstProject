const selectStyles = (
  isFocused,
  customStyles,
  customOptionStyles,
  customSingleValueStyles
) => ({
  control: styles => ({
    ...styles,
    backgroundColor: "#ffffff",
    width: "100%",
    padding: "0",
    borderRadius: "4px",
    border: "1px solid rgba(0,0,0,.1)",

    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "35px",
    boxShadow: null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor: isFocused ? null : "#1bc5bd"
    },
    ...customStyles
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "24px",
    ...customOptionStyles
  }),
  singleValue: styles => ({
    ...styles,
    ...customSingleValueStyles
  })
});
export default selectStyles;
