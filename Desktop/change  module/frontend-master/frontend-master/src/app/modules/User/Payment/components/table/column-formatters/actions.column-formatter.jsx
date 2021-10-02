/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../../../../_metronic/_helpers";
import * as actions from "../../../_redux/payment.actions";
import { CircularProgress } from "@material-ui/core";

export const ActionsColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  { dispatch, actionId, setActionId, setLoading, loading }
) => {
  const handleRoute = () => {
    window.open(row.payUrl);
  };
  const updateRecorde = async (id) => {
    setLoading(true);
    setActionId(row.id);
    await dispatch(actions.fetchRecordCaptureCharge(id));
    setLoading(false);
  };

  return (
    <>
      <OverlayTrigger
        overlay={<Tooltip id="data-edit-tooltip">pay-page</Tooltip>}
      >
        <a
          className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
          onClick={handleRoute}
        >
          <span className="svg-icon svg-icon-md svg-icon-primary">
            <SVG
              src={toAbsoluteUrl("/media/svg/icons/Navigation/Up-right.svg")}
            />
          </span>
        </a>
      </OverlayTrigger>
      <> </>
      <OverlayTrigger
        overlay={<Tooltip id="data-delete-tooltip">Refresh</Tooltip>}
      >
        <a
          className="btn btn-icon btn-light btn-hover-danger btn-sm"
          onClick={() => updateRecorde(row.id)}
        >
          <span className="svg-icon svg-icon-md svg-icon-danger">
            {!loading ? (
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Code/Time-schedule.svg")}
              />
            ) : loading && row.id === actionId ? (
              <CircularProgress size="5" color="primary" />
            ) : loading && row.id !== actionId ? (
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Code/Time-schedule.svg")}
              />
            ) : null}
          </span>
        </a>
      </OverlayTrigger>
    </>
  );
};
