import React, { useState } from 'react'
import './newexpenceform.css';
export default function Newexpenceform(props) {

    const [title, setTitle] = useState('title changed')
    const [amount, setamount] = useState('amount changed')
    const [date, setday] = useState('day changed')

    // multi state connect
    // const [userInput, setuserInput] = useState({
    //     title: 'title change',
    //     amount: 'amount change',
    //     day: 'day change',
    // })

    function changetitle(event) {
        setTitle(event.target.value)
        console.log('title changed')

        // multi state connect
        //     setuserInput({
        //         ...userInput,
        //         title: event.target.value,
        //     })
    }

    function amountChange(event) {
        setamount(event.target.value)
        console.log('change amount')
    }
    // multi state connect
    //     setuserInput({
    //         ...userInput,
    //         amount: event.target.value,
    //     })


    function changeday(event) {
        setday(new Date(event.target.value))
        console.log('change day')

        // multi state connect
        //     setuserInput({
        //         ...userInput,
        //         day: event.target.value,
        //     })
    }

    function submitHandler(e) {
        e.preventDefault()
        const expenceData = {
            title: title,
            amount: amount,
            date: date,
        }
        props.onsaveExpenceData(expenceData)
        // console.log(expenceData)
    }
    return (
        <div>
            <form action="#"  onSubmit={submitHandler}>
                <div className='main'>
                    <label>title </label>
                    <input type="text" onChange={changetitle} />
                    <label>amount </label>
                    <input type="text" onChange={amountChange} />

                </div>
                <div>
                    <label>date </label>
                    <input type="date" onChange={changeday} />
                    <button className='btn' type='submit'>add expence</button>
                </div>
            </form>
        </div>
    )
}
