import React from 'react'
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { components } from "react-select";
const SingleValue = ({ children, ...props }) => (

  <>
    <components.SingleValue {...props} className="d-flex align-items-center"> 
    <img
      src={toAbsoluteUrl(`/media/svg/flags/${props.data.icon}`)}
      style={{ width: 25, borderRadius: "25%" }}
      alt={props.data.label}
    />

      <span className="d-flex ml-3">
        {props.data.label}
      </span>
    </components.SingleValue>

  </>
);
export default SingleValue;