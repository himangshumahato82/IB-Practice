

import React from "react";
import Nav from "./Components/Nav";
import { useState } from "react";
import { Mycontext } from "./Components/Context/Context";
import AllRoute from "./Components/Route/AllRoute";
function App() {
 const [state,setState]=useState(false)


 
  return (
    <div className="App">
     <Mycontext.Provider value={{setState,state}}>
     <Nav/>
     <AllRoute/>
     
     </Mycontext.Provider>
    
    </div>
  );
}

export default App;
