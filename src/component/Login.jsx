import { useState } from "react";

export default function Login(){
  let[uname,suname]=useState("");
    return(

        
        <>

        <h6>UserName</h6>
        <input type="text" onChange={(e)=>{
            suname(e.target.value);
            
        }}></input>
        <button onClick={()=>
        {
            console.log(uname);
        }}>Submit</button>
        </>
       
    );
}