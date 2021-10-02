import React from "react";
import {
  ChargedCssClasses,
  ChargedTitles,
} from "../../payment-ui.helpers";

export const ChargedColumnFormatter = (cellContent, row) => {

	const indexNumber = ChargedTitles.findIndex(
		(title) => title === cellContent
	);

	return (
		<span
			className={`label label-lg label-light-${ChargedCssClasses[indexNumber]} label-inline`}
		>
			{`${ChargedTitles[indexNumber+1]}`}
		</span>
	);
};
