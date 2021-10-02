import React from "react";
import {
	RoleCssClasses,
	RoleUsers,
} from "../../users-ui.helpers";

export const RoleColumnFormatter = (cellContent, row) => {
	const indexNumber = RoleUsers.findIndex(
		(type) => type === cellContent
	);

	return (
		<span
			className={`badge badge-${RoleCssClasses[indexNumber]} badge-dot`}
		>
			{RoleUsers[indexNumber]}
		</span>
	);
};
