import React, { useState } from "react";
import ExpenceDate from "./expanceDate";
import "./expenceitem.css";

export default function Expenceitem(props) {
  // function onDelete(event){
  //   const liid=document.getElementById(props.id)
  //   const ullist=document.getElementById('ul-list')      ---> this is delete function

  //   ullist.removeChild(liid)
  //   console.log(props.id)
  // }

  const [title, setTitle] = useState(props.title)

  function edit(){
    setTitle('update');
    console.log(title);
  }
  return (
    <li id={props.id}>
      
      <div className="expence_item">
        <ExpenceDate date={props.date} />
        <div className="expence_description">
          <h1>{title}</h1>
          <div className="expence_amount">{props.amount}</div>
          {/* <button onClick={onDelete}>delete</button>      --> delete <button> */}
          <button onClick={edit}>Edit</button>
        </div>
      </div>
    </li>
  );
}
