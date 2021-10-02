import React from "react";
import {
	TypeCssClasses,
	TypeTitles,
} from "../../schedule-ui.helpers";

export const TypeColumnFormatter = (cellContent, row) => {
	const indexNumber = TypeTitles.findIndex(
		(type) => type === cellContent
	);

	return (
		<span
			className={`badge badge-${TypeCssClasses[indexNumber]} badge-dot`}
		>
			{TypeTitles[indexNumber]}
		</span>
	);
};
