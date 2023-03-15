import React from 'react';
 import { useState,useEffect} from 'react';
function Pegi(props) {
  const [pegi,setPegi]=useState(1)
  const[data,setData]=useState([])
  const [search, setSearch] = useState(""); 
     const GetData=()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?_page=${pegi}&_limit=20`)
        .then((res)=>res.json())
        .then ((data)=>{
         console.log(data.totalPages)
         setData(data) 
        })
     }
    const Next =()=>{ 
        setPegi((pre)=>pre+1)
        GetData(pegi)
    }
    const Pre=()=>{
        setPegi((pre)=>pre-1) 
       GetData(pegi)  
    }
    // const debounce = (func) => {
    //   let timer;
    //   return function (...args) {
    //     const context = this;
    //     console.log(this);
    //     if (timer) clearTimeout(timer);
    //     timer = setTimeout(() => {
    //       // timer = null;
    //       func.apply(context, args);
    //     }, 500);
    //   };
    // };
      const handlechange =  (e) => {
         setSearch(e.target.value);
        fetch(`https://jsonplaceholder.typicode.com/comments?_page=${pegi}&_limit=20&q=${search}`)
       .then((res)=>res.json())
       .then((data)=>{
         setData(data)
       })
        // console.log("hi");
      };
     const clear =()=>{
        setSearch("")
        GetData()
     }
    return (
        <div>
        <input placeholder="Enter text"  onChange={handlechange} />
         <button onClick={clear}>Cleardata</button>
            <button onClick={(pegi)=>{
                GetData(pegi)
            }
                 
            

            }> GETDATA</button>
              { data.map((e,i)=>{
              return(
                <div  key={i}>
                 <h1>{e.email}</h1>
                
                
                </div>
              )


              })}

            <div style={{display:"flex",justifyContent:"space-between"}}>
            <button disabled={pegi===1} onClick={Pre}>Pre</button>
             <h1>{pegi}</h1>
            <button onClick={Next}
               
             
            
        >Next</button>
            </div>
        </div>
    );
}

export default Pegi;