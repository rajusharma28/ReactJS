import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";





  // function Fibbonnaci(n){
  //   if(n<=1)
  //     return n;


  //   return Fibbonnaci(n-1) + Fibbonnaci(n-2);
  // }
// useMemo

function App(){

  const [count,setCount]=useState(0)
  const [number,setNumber]=useState("")

  // const [result ,setResult]=useState(null);



const Fibbonnaci = useCallback((n)=>{
    if(n<=1)
      return n;


    return Fibbonnaci(n-1) + Fibbonnaci(n-2);
},[])


  // useMemo 
  // const result = useMemo(()=>{
  //   Fibbonnaci(number);
  // },[number])



  const result = useMemo(()=>Fibbonnaci(number),[number])

//   useEffect(()=>{
// setResult(Fibbonnaci(number))

//   },[number])


  return(
    <>
    <h1>Couter is:{count}</h1>

    <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>

      <div>

        <h2>Fibbonnaci number is:{result}</h2>
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
      </div>
    </>


  )

}


// Rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
