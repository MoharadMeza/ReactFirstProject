import React from "react"

export const TelephoneNumberColumnFormatter = (cellContent, row, rowIndex, { entities }) => {
    return (
        <>
            {entities[rowIndex].countryCode}{cellContent}
        </>
    )
}