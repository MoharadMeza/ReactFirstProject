import React from "react";
import {
	StatusCssClasses,
	StatusTitles,
} from "../../payment-ui.helpers";

export const StatusColumnFormatter = (cellContent, row) => {
	const indexNumber = StatusTitles.findIndex(
		(title) => title === cellContent
	);

	return (
		<span
			className={`label label-lg label-light-${StatusCssClasses[indexNumber]} label-inline`}
		>
			{StatusTitles[indexNumber]}
		</span>
	);
};
