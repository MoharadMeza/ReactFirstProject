import React from "react"


export const TelephoneNumberColumnFormatter = (cellContent , row , rowIndex ,{entities}) => {
    return(
        <>
            {cellContent && entities[rowIndex].profile.countryCode}{cellContent}
        </>
    )
}