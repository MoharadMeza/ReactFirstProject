/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../../../../_metronic/_helpers";

export const ActionsColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  {openChangeStatusDialog}
) => (
  <>
    <OverlayTrigger
      overlay={<Tooltip id="data-delete-tooltip">View</Tooltip>}
    >
      <a
        className="btn btn-icon btn-light btn-hover-secondary btn-sm"
        onClick={() => openChangeStatusDialog(row.id)}
      >
        <span className="svg-icon svg-icon-md svg-icon-secondary">
          <SVG src={toAbsoluteUrl("/media/svg/icons/General/Visible.svg")} />
        </span>
      </a>
    </OverlayTrigger>
    </> 
  
);
