import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import Increment from "./Increment";
import Decrement from "./Decrement";

// state lifiting 
function App() {

const [count,setCount] =useState(0);
  return (
    <>
      <div>
        <h1> Hello coder Army</h1>
       

        <Increment counts={count} setCounts={setCount}/>
        <Decrement counts={count} setCounts={setCount}/>

    
      </div>
    </>
  );
}







// Rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
