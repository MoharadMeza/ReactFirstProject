import React from "react";
import {
	AccountCssClasses,
	AccountStatusUsers,
} from "../../users-ui.helpers";

export const AccountColumnFormatter = (cellContent, row) => {
	const indexNumber = AccountStatusUsers.findIndex(
		(type) => type === cellContent
	);

	return (
		<span
			className={`label label-lg label-light-${AccountCssClasses[indexNumber]} label-inline`}
		>
			{AccountStatusUsers[indexNumber]}
		</span>
	);
};
