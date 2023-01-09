import React from 'react';
 import { useState,useEffect} from 'react';
function Pegi(props) {
  const [pegi,setPegi]=useState(1)
  const[data,setData]=useState([])
  const [search, setSearch] = useState("");
  
      
     const GetData=()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?_page=${pegi}&_limit=10`)
        .then((res)=>res.json())
        .then ((data)=>{
         console.log(data)
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
    //     let timer;
    //      return function (...inp) {
    //         const context = "";
    //      console.log(inp)
    //       if (timer) clearTimeout(timer);
    //       timer = setTimeout(() => {
    //         // timer = null;
    //            console.log( func.apply(context,inp))
    //           func.apply(context,inp);
    //       }, 1000);
    //     };
    //   };
      const handlechange =  (e) => {
       
         setSearch(e.target.value);
        fetch(`https://jsonplaceholder.typicode.com/comments?_page=${pegi}&_limit=10&q=${search}`)
       .then((res)=>res.json())
       .then((data)=>{
         setData(data)
       })
    
        console.log("hi");
      };
     const clear =()=>{
        setSearch("")
        GetData()
     }

    return (
        <div>

        <input placeholder="Enter text" value={search} onChange={handlechange} />
         <button onClick={clear}>Cleardata</button>
            <button onClick={(pegi)=>{
                GetData(pegi)
            }
                 
            

            }> GETDATA</button>
              { data.map((e)=>{
              return(
                <div>
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