/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../../../../_metronic/_helpers";


export const ActionsColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  { openEditPage, openDeleteRecordDialog, openMarkAsReadDialog }
) => {

  return (
    <div className="container">
      <div className="row justify-content-md-end" >
        <div className="col-12 px-1 col-md-auto mb-2">
          <OverlayTrigger
            overlay={<Tooltip id="data-edit-tooltip">Edit</Tooltip>}
          >
            <a
              className="btn btn-icon btn-light btn-hover-primary btn-sm"
              onClick={() => openEditPage(row.id)}
            >
              <span className="svg-icon svg-icon-md svg-icon-primary">
                <SVG
                  src={toAbsoluteUrl("/media/svg/icons/Communication/Write.svg")}
                />
              </span>
            </a>
          </OverlayTrigger>
        </div>
        <div className="col-12 px-1 col-sm-12 col-md-auto mb-2">
          <OverlayTrigger
            overlay={<Tooltip id="data-delete-tooltip">Delete</Tooltip>}
          >
            <a
              className="btn btn-icon btn-light btn-hover-danger btn-sm mx-md-1"
              onClick={() => openDeleteRecordDialog(row.id)}
            >
              <span className="svg-icon svg-icon-md svg-icon-danger">
                <SVG src={toAbsoluteUrl("/media/svg/icons/General/Trash.svg")} />
              </span>
            </a>
          </OverlayTrigger>
        </div>
        <div className="col-12 px-1 col-md-auto">
          <OverlayTrigger
            overlay={<Tooltip id="data-markAsRead-tooltip">Mark as read</Tooltip>}
          >
            <a
              className="btn btn-icon btn-light btn-hover-success btn-sm"
              onClick={() => openMarkAsReadDialog(row.id)}
            >
              <span className="svg-icon svg-icon-md svg-icon-success">
                <SVG src={toAbsoluteUrl("/media/svg/icons/Navigation/Check.svg")} />
              </span>
            </a>
          </OverlayTrigger>
        </div>
      </div>

    </div>
  );
}


