import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
export const MessageColumnFormatter = (cellContent, row) => {
    return (
        <OverlayTrigger
            overlay={<Tooltip id="data-edit-tooltip">{cellContent}</Tooltip>}
        >
            <p>{cellContent && (cellContent.length < 20 ? cellContent : cellContent.substring(0, 20).concat("..."))}</p>
        </OverlayTrigger>
    );
};
