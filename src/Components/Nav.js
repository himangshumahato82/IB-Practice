import React from 'react';
import { useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
function Nav(props) {
    useEffect(()=>{
        SmartWatch()
    },[])
      const[smart,setSmart]=useState([])
        const SmartWatch=()=>{
      setInterval(()=>{
    
     
       const date=new Date() 
       let hr=date.getHours()
      let min=date.getMinutes() 
      let sec=date.getSeconds()
     
      hr=hr.toString().padStart(2,"0")
      min=min.toString().padStart(2,"0")
      sec=sec.toString().padStart(2,"0")
     const arr=[hr,":",min,":",sec]
     setSmart(arr)
   
        
    },1000)
    
        }
       
const dateNow = new Date();
const day = dateNow.toLocaleDateString('en-In', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
console.log(day)

    return (
        <div style={{display:"flex",justifyContent:"space-evenly",height:"100px",backgroundColor:"teal",alignItems:"center"}}>
        
        <h1 style={{color:"hsl(75, 84%, 47%)"}}> 
          <p style={{marginBottom:"-5px",marginTop:"-10px"}}>
          {day}
          </p>
          
        
        {smart}</h1>
              <Link to ={"/"} style={{textDecoration:"none"}}><h1>Login</h1></Link>
               
              <Link to ={"/timer"} style={{textDecoration:"none"}}>
               <h1>
               Timmer
               </h1>
              </Link>
             <Link to={"/home"} style={{textDecoration:"none"}}><h1>Home</h1></Link>
             <Link to={"/useref"} style={{textDecoration:"none"}}>
             <h1>
             UseRef
             </h1>
            
             
             </Link>
            <Link to={"/data"} style={{textDecoration:"none"}}><h1>Data Fetch</h1></Link>
            <Link to={"/users"} style={{textDecoration:"none"}}> <h1>User Details</h1> </Link>
        </div>
    );
}

export default Nav;