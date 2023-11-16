import React from 'react'
import Newexpenceform from './newexpenceform';
export default function newexpence(props) {
    const saveExpenceDatahandler = enterdexpenceData =>{
        const expenceData = {
            ...enterdexpenceData,
            id: Math.random().toString()
        } 
        props.onaddexpence(expenceData)
    }
  return (
    <div>
        <Newexpenceform onsaveExpenceData={saveExpenceDatahandler}/>
    </div>
  )
}
