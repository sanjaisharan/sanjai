import { useState } from "react";
import "./Goku.css";
const Goku = () => {
  const [currentState, setState] = useState("kaioken");
  return (
    <div className="s" style={{color:"black",fontSize:"30px"}}>
      <center>
        <input 
          type="checkbox" 
          onChange={() =>
            setState(currentState === "Kaioken" ? "SUPER SAIYAN!!!!" : "Kaioken")
          }
        />
        <h1 className="font-bold ">{currentState}</h1>
      </center>
    </div>
  );
};
export default Goku;