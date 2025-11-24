import { useContext, useState } from "react";
import GlobalContext from "./Global";

function Decrement(){

 const{count,setCount} = useContext(GlobalContext);

    return(

        <>
      
   

        <button onClick={()=>setCount(count-5)}>Decrement</button>
        </>
    )

}

export default Decrement;