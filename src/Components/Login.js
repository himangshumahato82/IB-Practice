import React from 'react';
import { useContext,useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Mycontext } from './Context/Context';
function Login(props) {
    const navigate=useNavigate()
    const {setState}=useContext(Mycontext)
     const handleChange = ()=>{
        setState(true);
        navigate("/home")
     }
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
 const arr=[hr,min,sec]
 setSmart(arr)
// console.log(arr)
//  console.log(smart)
// console.log(hr,min,sec)
// const timeString = `${hr}:${min}:${sec}`;
// hour.textContent = hr;
//    minute.textContent = min;
//    seconds.textContent = sec;
    
},1000)
// const hour = document.getElementById("hour");
// const minute = document.getElementById("minute");
// const seconds = document.getElementById("seconds");
    }
    // console.log(smart)


   
    return (
        <div style={{alignItems:"center"}}>
           <input type="text"  placeholder='type here name'/> 
           <input type="text" placeholder=' type here password' />
           <button onClick={handleChange}>Login</button>
          
           {smart.map((el)=>{
            // console.log(el)
            return(
                <div className="clock" style={{display:"flex"}}>
                <div id="hour">{el[0]}</div>
               
                <div id="minute">{el[1]}</div>
                
                <div id="seconds">
                {el[2]}
                </div>
                </div>
            )
           })}
           
         </div>
        
    );
}

export default Login;