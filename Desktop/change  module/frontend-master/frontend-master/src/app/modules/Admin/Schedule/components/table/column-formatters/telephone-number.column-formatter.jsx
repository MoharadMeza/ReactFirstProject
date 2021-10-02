import React from "react"


export const TelephoneNumberColumnFormatter = (cellContent , row , rowIndex ,{entities}) => {
    return(
        <p>
            {entities[rowIndex].countryCode}{cellContent}
        </p>
    )
}