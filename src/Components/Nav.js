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
    // console.log(arr)
    //  console.log(smart)
    // console.log(hr,min,sec)
    // ;
    // hour.textContent = hr;
    //    minute.textContent = min;
    //    seconds.textContent = sec;
        
    },1000)
    // const hour = document.getElementById("hour");
    // const minute = document.getElementById("minute");
    // const seconds = document.getElementById("seconds");
    
        }
        // const date1= document.getElementById("date");
const dateNow = new Date();
const day = dateNow.toLocaleDateString('en-In', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
console.log(day)
// const timeString = `${day}`
// date1.textContent = `${day}`
    return (
        <div style={{display:"flex",justifyContent:"space-evenly",height:"100px",backgroundColor:"teal",alignItems:"center"}}>
        
        <h1 style={{color:"hsl(75, 84%, 47%)"}}> 
          <p style={{marginBottom:"-5px",marginTop:"-10px"}}>
          {day}
          </p>
          
        
        {smart}</h1>
              <Link to ={"/"}><h1>Login</h1></Link>
               
              <Link to ={"/timer"}>Timmer</Link>
             <Link to={"/home"}><h1>Home</h1></Link>
             <Link to={"/useref"}>
             
             UseRef
             
             </Link>
            <Link to={"/data"}><h1>Data Fetch</h1></Link>
            <Link to={"/users"}> <h1>User Details</h1> </Link>
        </div>
    );
}

export default Nav;