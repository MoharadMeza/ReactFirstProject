import React from "react";
import {
	StatusCssClasses,
	StatusUsers,
} from "../../users-ui.helpers";

export const StatusColumnFormatter = (cellContent, row) => {
	const indexNumber = StatusUsers.findIndex((title) => {
		return title === cellContent
	});

	return (
		<span
			className={`label label-lg label-light-${StatusCssClasses[indexNumber]} label-inline`}
		>
			{StatusUsers[indexNumber]}
		</span>
	);
};
