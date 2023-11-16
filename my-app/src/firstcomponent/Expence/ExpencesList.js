import React from 'react'
import Expenceitem from './expenceitem'
export default function ExpencesList(props) {
    if (props.item.length === 0) {
        return <h2>no expence found</h2>
    }
    return (
        <ul>
            {props.item.map((exp)=>(
                <Expenceitem
                title={exp.title}
                amount={exp.amount}
                date={exp.date}
                key={exp.id} />
            ))}

        </ul>
    )
}
