// import React, { useState } from 'react'

export default function ExpenceFilters(props) {

    const dropdownchangehandler = (e) => {
        props.onchangefilter(e.target.value)
    }
    return (
        <div>
            <div>
                <label>filter by year</label>
                <select value={props.selected} onChange={dropdownchangehandler}>
                    <option value="2020">2020</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
            </div>
        </div>
    )
}
