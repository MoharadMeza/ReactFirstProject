import React from "react"


export const FullNameColumnFormatter = (cellContent , row , rowIndex ,{entities}) => {
    return(
        <p>
          {cellContent}  {entities[rowIndex].lastName}
        </p>
    )
}