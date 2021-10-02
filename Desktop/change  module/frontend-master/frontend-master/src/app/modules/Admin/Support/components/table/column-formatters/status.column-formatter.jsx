import React from "react";
import {
	StatusCssClasses,
	SupportStatus,
} from "../../support-ui.helpers";

export const StatusColumnFormatter = (cellContent, row) => {
	const indexNumber = SupportStatus.findIndex(
		(title) => title === cellContent
	);

	return (
		<span
			className={`label label-lg label-light-${StatusCssClasses[indexNumber]} label-inline`}
		>
			{SupportStatus[indexNumber]}
		</span>
	);
};
