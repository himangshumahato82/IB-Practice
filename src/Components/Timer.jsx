// import React from 'react';
// import { useState,useRef } from 'react';
// function Timer(props) {

//   const[timer,setTimer]=useState(0)
    
//   const Timer=useRef()
  
//   const Start=()=>{
  
//     Timer.current=setInterval(() => {
//       setTimer((pre)=>pre+1)
//     }, 1000);
//   }
  
//   const Stop=()=>{
//     clearInterval(Timer.current)
//   }
//   const Pause=()=>{
//     Stop()
//     setTimer(0)
//   }
   

//     return (
//       <div>
//         <h1>{timer}</h1>
//         <button onClick={Start}>Start</button>
//         <button onClick={Stop}>Stop</button>
//         <button onClick={Pause}>Pause</button>
          
        
//       </div>
//     );
// }

// export default Timer;