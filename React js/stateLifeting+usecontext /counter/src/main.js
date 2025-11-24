import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import Increment from "./Increment";


function App() {
 const [count,setCount]=useState(0);

  return (
    <>
      <div>
        <h1> Parent Couter is:{count}</h1>
       

        <Increment counts={count} setCounts ={setCount}/>
    
      </div>
    </>
  );
}







// Rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
