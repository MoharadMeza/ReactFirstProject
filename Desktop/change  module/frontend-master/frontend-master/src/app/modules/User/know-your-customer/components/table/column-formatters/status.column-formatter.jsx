import React from "react";
import {
	StatusCssClasses,
	StatusTitles,
} from "../../know-your-customer-ui.helpers";

export const StatusColumnFormatter = (cellContent, row) => {
	const indexNumber = StatusTitles.findIndex(
		(type) => type === cellContent
	);

	return (
		<span
			className={`badge badge-${StatusCssClasses[indexNumber]} badge-dot`}
		>
			{StatusTitles[indexNumber]}
		</span>
	);
};
