// import React, { useState } from "react";
import React, { useState } from 'react'
import Expences from './firstcomponent/Expence/Expences'
import Newexpence from "./firstcomponent/newexpence/newexpence";

const dummy_expence = [
  {
    id: 1,
    title: "petrol",
    amount: 100,
    date: new Date(1, 2, 2021),
  },
  {
    id: 2,
    title: "desil",
    amount: 200,
    date: new Date(1, 2, 2024),
  },
  {
    id: 3,
    title: "paper",
    amount: 300,
    date: new Date(1, 2, 2022),
  },
  {
    id: 4,
    title: "pen",
    amount: 400,
    date: new Date(1, 2, 2023),
  },
];
function App() {

  // const [items, setItem] = useState(dummy)
  // const listitem = items.map((item) => {
  //   return (
      
  //     <Expenceitem
  //       title={item.title}
  //       amount={item.amount}         --> this is delete function 
  //       date={item.date}
  //       id={item.id}
  //       setItem={setItem}
  //       key ={item.id}
        
  //     />
  //   );
  // });
  const [dummy, setdummy] = useState(dummy_expence)
  const addexpencehandler = (expence) => {
    setdummy((prevexp)=>{
      return [expence, ...prevexp]
    })
  }
  return (
    <div>
      <Newexpence onaddexpence={addexpencehandler}/>
      <Expences item={dummy}/>
      {/* <ul id="ul-list" className="ul">{listitem}</ul>;      related to delete function  */}
        
    </div>
  )
}

export default App;
