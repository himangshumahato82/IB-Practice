import React from 'react';
 import { useState } from 'react';
function Home(props) {
    const [state,setState]=useState([])
    const arr=["bappe", "messi", "ronaldo", "di maria", "rooney", "Leon", "son"]
       
 const search=(e)=>{
  let input =e.target.value
   if(input){
    let newarr=arr.filter((el)=>{
     return el.includes(input)
    })
    setState(newarr)
   }else{
    setState([])
   }

 }
 const setdata=(el)=>{
    document.getElementById("input").value=el
    setState([])
 }

    return (
        <div style={{textAlign:"center"}}>
            <h1>Welcome to home page</h1>
            <input id='input' type="search" placeholder='text here' onInput={(event)=>search(event)} />

            <div>
             {state.map((el,i)=>{
               return (
               <p key={i}  onClick={() => setdata(el)} >
                   {el}
               </p>
               )
             })}
            
            </div>
        </div>
    );
}

export default Home;