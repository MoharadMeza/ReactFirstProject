import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
export const NoteColumnFormatter = (cellContent, row) => {

	return (
    <OverlayTrigger
      overlay={<Tooltip id="data-edit-tooltip">{cellContent}</Tooltip>}
    >
     
        <p>{cellContent.substring(0,20)}...</p>
    </OverlayTrigger>

	);
};
