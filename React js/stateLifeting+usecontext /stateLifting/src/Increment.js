import { useContext, useState } from "react";

function Increment({counts,setCounts}){

    

    return(

        <>
        <h2> child Counter is {counts}</h2>
        <button onClick={()=>setCounts(counts+1)}>Increment</button>
        </>
    )

}

export default Increment;