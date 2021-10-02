
// import React from "react";
// import SVG from "react-inlinesvg"
// import { toAbsoluteUrl } from "../../../../../../../_metronic/_helpers";

// export const EnableColumnFormatter = (cellContent, row, props) => {
//   return (
//     <>
//       {!props ? (
//         <span className="svg-icon svg-icon-success">
//           <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Done-circle.svg")} />
//         </span>
//       ) : (
//         <span className="svg-icon svg-icon-danger">
//           <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Error-circle.svg")} />
//         </span>
//       )}
//     </>
//   );
// };
import React from "react";
import {
	EnableCssClasses,
  EnableTitles,
} from "../../available-payment-ui.helpers";

export const EnableColumnFormatter = (cellContent, row) => {
	const indexNumber = EnableTitles.findIndex(
		(title) => title === cellContent
	);

	return (
		<span
			className={`label label-lg label-light-${	EnableCssClasses[indexNumber]} label-inline`}
		>
			{`${EnableTitles[indexNumber]}`}
		</span>
	);
};
