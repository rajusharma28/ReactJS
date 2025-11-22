
import { useState,useEffect, usereactmemo } from "react";

function Colorful(){

  const [color,setColor]=useState("black");

  console.log("first");
  

  useEffect(()=>{

    console.log("useEffected executed");
    
      document.body.style.backgroundColor=color;

  },[color]);


  return(
    <>
    <h1>BackgroundColor Changer</h1>
         <div className="but">

          <button  style={{background:"red"}} onClick={()=>setColor("red")} >red</button>
         <button  style={{background:"blue"}} onClick={()=>setColor("blue")} >blue</button>
         <button style={{background:"yellow"}}onClick={()=>setColor("yellow")} >yellow</button>
         <button  style={{background:"pink"}} onClick={()=>setColor("pink")} >pink</button>
         <button style={{background:"green"}} onClick={()=>setColor("green")} >green</button>
         </div>
                         
    </>
  )

}

export default React.memo(Colorful);