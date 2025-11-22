import React,{useState} from "react";
import ReactDOM from "react-dom/client";




function Counter() {
//   let count = 0;

let [count,setcount ]= useState(0);


  function incrementnumber(){
    count=count+1;
    setcount(count)

    // document.querySelector('h1').innerText=`Count is ${count}`; // dom ku maniputed kara raha hai

    console.log(count);
    
  }

   function decrementnumber(){
    count=count-1;
      setcount(count)                

    console.log(count);
    //   document.querySelector('h1').innerText=`Count is ${count}`;
  }


    function Reset(){
    count=0+0;
    setcount(count)

    // document.querySelector('h1').innerText=`Count is ${count}`; // dom ku maniputed kara raha hai

    console.log(count);
    
  }

  return (
    <div className="first">
      <h1>Count is: {count}</h1>
      <button onClick={incrementnumber}>Increment</button>
      <button onClick={decrementnumber} >Decrement</button>
         <button onClick={Reset} >Reset</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);
