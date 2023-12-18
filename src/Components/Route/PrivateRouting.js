import React from 'react';
import { useContext,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Mycontext } from '../Context/Context';
import Login from '../Login';
function PrivateRouting(props) {
    const navigate=useNavigate()
    const {Chil}=props
    
    // console.log(props)
 const {state}=useContext(Mycontext)

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