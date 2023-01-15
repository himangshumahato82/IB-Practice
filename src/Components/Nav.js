import React from 'react';
import { Link } from 'react-router-dom';
function Nav(props) {
    return (
        <div style={{display:"flex",justifyContent:"space-evenly",height:"60px",backgroundColor:"teal",alignItems:"center"}}>
            
              <Link to ={"/"}><h1>Login</h1></Link>
             <Link to={"/home"}><h1>Home</h1></Link>
            <Link to={"/data"}><h1>Data Fetch</h1></Link>
            <Link to={"/users"}> <h1>User Details</h1>      </Link>
        </div>
    );
}

export default Nav;