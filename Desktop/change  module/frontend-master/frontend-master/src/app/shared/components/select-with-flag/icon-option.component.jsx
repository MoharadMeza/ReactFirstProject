import React from 'react'
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { components } from "react-select";
const { Option } = components;
const IconOption = props => (
  <Option {...props} className="align-items-center d-flex">
    <img
      src={toAbsoluteUrl(`/media/svg/flags/${props.data.icon}`)}
      style={{ width: 25, margin: "2px", borderRadius: "25%"}}
      alt={props.data.label}
    />
    <span className="d-flex ml-3">
      {props.data.label}
    </span>
  </Option>
);
export default IconOption;