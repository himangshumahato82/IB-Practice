import React from 'react';
 import { useState } from 'react';

function Users(props) {
  const [state,setState]=useState([])
  const [data,setData]=useState([])
  
   const arr= [...state]
    //  console.log(arr)
     
     
    
    fetch(`https://jsonplaceholder.typicode.com/comments?_limit=20`)
    .then((res)=>res.json())
     .then((data)=>{
        setState(data) 
     })
     const search =(e)=>{
        let input =e.target.value
       

        if(input){
            let newarr=arr.filter((el)=>{
             return el.email.toLowerCase().startsWith(input)
            })
            setData(newarr)
            console.log(newarr)
           }else{
            setData([])
           }
     }
     const setdat=(el)=>{
        document.getElementById("input").value=el
        setData([])
     }
//   console.log(data)
    return (
        <div>
            <h1>Welcome Users page</h1> 
            <input id='input' type="search" placeholder='search'  onInput={(event)=>search(event)} />
              <div>
              {data.map((el,i)=>{
                 return(
                    <h1 key={i} onChange={()=>setdat(el)}>
                     {el.email}
                    </h1>
                 )  
              }) }
              
              </div>

        </div>
    );
}

export default Users;