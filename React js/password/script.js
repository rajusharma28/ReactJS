import React,{use, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";


function PasswordGenrator(){


    const [password,setPassword]=useState("");
    const [length,setlength]=useState(10);
    const [numberChange,setnumberChange]=useState(false);
    const [charChange,setCharChanage]=useState(false);


    function generatpassword(){ 
        let str ="qwertyuidsf[pcmvmvdkopdkvomockopkewsjviEDFIOJEIG0CI0OIEFIOJURGIIRG9C9EHEUF89URG90U";
        if(numberChange)
            str+="123456579090";
        if(charChange)
            str+="_+)(*(&^$%%^(*^";

        let pass ="";

        for(let i=0;i<length;i++){
            pass+=str[Math.floor(Math.random()*str.length)]
        }

        setPassword(pass)
    }

    useEffect(()=>{
        generatpassword();
    },[length])
  return(
    <>
    <h1>password is:{password}</h1>
    
    <div>
        <input type="range" min={5} max={50} value={length} onChange={(e)=>setlength(e.target.value)}></input>
        <label >Length is:{length }</label>

        <input type="checkbox" defaultChecked={numberChange} onClick={()=>setnumberChange(!numberChange)}></input>
        <label>Number</label>

        <input type="checkbox" defaultChecked={charChange} onClick={()=>setCharChanage(!charChange)}></input>
        <label>Character</label>
    </div>
    </>
  )
  
}

ReactDOM.createRoot(document.getElementById("root")).render(<PasswordGenrator/>)
