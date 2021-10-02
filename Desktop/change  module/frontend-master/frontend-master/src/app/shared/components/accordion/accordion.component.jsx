import React, { useState , Children } from "react"
import { Accordion } from "./accordion.style"

export default function Accordions({ children }) {
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        Children.map(children, (child, index) => {
            return (
                <Accordion className="shadow-none" key={index} expanded={expanded === index} onChange={handleChange(index)}>
                    {child.props.children}
                </Accordion>
            )
        })
    )
}
