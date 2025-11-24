import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import Increment from "./Increment";
import Decrement from "./Decrement";
import GlobalContext from "./Global";

// state lifiting 
function App() {

const [count,setCount] =useState(0);
  return (
    <>
    <GlobalContext.Provider value={{count,setCount}}>

  
      <div>
        <h1> Hello coder Army {count}</h1>
       

        <Increment />
        <Decrement />

    
      </div>
        </GlobalContext.Provider>
    </>
  );
}







// Rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
