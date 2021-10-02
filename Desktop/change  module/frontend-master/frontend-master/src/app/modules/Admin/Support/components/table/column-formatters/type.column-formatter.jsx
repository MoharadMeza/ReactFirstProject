import React from "react";
import {
	TypeCssClasses,
	SupportType,
} from "../../support-ui.helpers";

export const TypeColumnFormatter = (cellContent, row) => {
	const indexNumber = SupportType.findIndex(
		(type) => type === cellContent
	);

	return (
		<span
			className={`badge badge-${TypeCssClasses[indexNumber]} badge-dot`}
		>
			{SupportType[indexNumber]}
		</span>
	);
};
