import React from 'react';
import { useContext,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Mycontext } from '../Context/Context';
import Login from '../Login';
function PrivateRouting(props) {
    const navigate=useNavigate()
    const {Chil}=props
    // console.log(Chil)
    console.log(props)
 const {state}=useContext(Mycontext)
//  console.log(state)
   useEffect(() => {
    if(state===false){
        navigate("/")}
        else
        {
             navigate("/home")
        }
    
   },[]);

    return (
        <div>
        {state===true?<Chil/>:<Login/>}
            
        </div>
    );
}

export default PrivateRouting;