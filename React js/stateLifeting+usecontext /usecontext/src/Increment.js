import { use, useContext, useState } from "react";
import GlobalContext from "./Global";

function Increment(){
//    const data =  useContext(GlobalContext);

   const{count,setCount} = useContext(GlobalContext);

    

    return(

        <>
        <h2> I am printing  {count}</h2>
        <button onClick={()=>setCount(count+5)}>Increment</button>
        
        </>
    )

}

export default Increment;