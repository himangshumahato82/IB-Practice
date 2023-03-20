import React from 'react';
 import {useState,useEffect} from "react"

function Users(props) {
   const [search, setSearch] = useState(""); 
  const [state,setState]=useState([])

   //const [pegi,setPegi]=useState(1)
   // const GetData=()=>{
   //   fetch(`https://jsonplaceholder.typicode.com/comments?_page=${pegi}&_limit=10`)
   //   .then((res)=>res.json())
   //   .then((data)=>{
   //    // console.log(data);
   //    setState(data)
   //   })
   // }

   useEffect(()=>{
    const handlechange=setTimeout(()=>{
      fetch(`https://jsonplaceholder.typicode.com/comments?q=${search}`)
      .then((res)=>res.json())
      .then((data)=>{
        setState(data)
      })
   },2000)
   return ()=>clearTimeout(handlechange)
},[search])
   //  const Pre=()=>{
   //    setPegi((pre)=>pre-1)
   //    // GetData()
   //  }
   // const Next=()=>{
   //  setPegi((pre)=>pre+1)
   // //  GetData()
   // }
   // closure
   // const add = (function () {
   //    let counter = 0;
      
   //    return function () {counter += 1; return counter}
      
   //  })();
    
   //  add();
   //  add();
   //  add();
   
    const add =(function(){
      let counter =0;
      return function(){counter+=1;return counter}
    })();
    
    add()
    add()
    add()
    console.log(add())

    var promise = new Promise(function(resolve, reject) {
      const x = "geeksforgeeks";
      const y = "geeksforgeeks"
      if(x === y) {
        resolve();
      } else {
        reject();
      }
      });
        
      promise.
        then(function () {
          console.log('Success, You are a GEEK');
        }).
        catch(function () {
          console.log('Some error has occurred');
        });
      




    //  fetch(`https://jsonplaceholder.typicode.com/comments?_limit=20`)
    
     //   console.log(state)
    return (
        <div>
            <h1>Welcome Users page</h1> 
            <input  placeholder='text....here'  onChange={(event) => setSearch(event.target.value)}/>
              <button >GetData</button>
             {state.map((el,i)=>{
               return(
                  <p key={i}>
                   {el.email}
                  </p>
               )
             })}
               
        </div>
    );
}

export default Users;