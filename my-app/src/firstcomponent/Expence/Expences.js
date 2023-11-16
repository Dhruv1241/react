import React, { useState } from 'react'
import ExpencesList from './ExpencesList';
import ExpenceFilters from './ExpenceFilters';
import './Expence.css';

export default function Expences(props) {

    const [filterdyear, setfilterdyear] = useState('2020')

    const filterchangehandler = selectedyear => {
        setfilterdyear(selectedyear)
    }

    const yearExpense = props.item.filter((expence) => {

        return expence.date.getFullYear().toString() === filterdyear;
    })


    return (
        <div className='filter'>
            <ExpenceFilters
                selected={filterdyear}
                onchangefilter={filterchangehandler} />
            <ExpencesList item={yearExpense}/>
        </div>
    )
}
