import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import Colorful from "./Component/colorful";

function Main(){
  
  const [count,setCount]=useState(0);

  return (
    <>
    <div className="counter">

      <h1>Counter is :{count}</h1>
      <button onClick={()=>{setCount(count+1)}} >Incement</button>
    </div>
    <Colorful></Colorful>
    
    </>
  )
 
}



ReactDOM.createRoot(document.getElementById("root")).render(<Main/>)
