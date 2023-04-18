import React from 'react';
import { Route,Routes } from 'react-router-dom';
import PrivateRouting from './PrivateRouting';
import Home from '../Home';
import Pegi from '../Pegi';
import Login from '../Login';
import Users from '../Users';
import Timer from '../Timer';
import  MyComponent from "../UseRef"
function AllRoute(props) {
    return (
        <div>
          
            <Routes>
            <Route path='/home' element={<PrivateRouting Chil={Home}/>}/>
            <Route path="/data" element={<PrivateRouting Chil={Pegi}/>}/>
            <Route path="/useref" element={<PrivateRouting Chil={MyComponent}/>}/>
            <Route path="/users" element={<PrivateRouting Chil={Users}/>}/>
            <Route path ="/" element={<Login/>}/>
            <Route path ="/timer" element={<Timer/>}/>
            </Routes>
        </div>
    );
}

export default AllRoute;