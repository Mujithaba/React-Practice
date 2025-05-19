import React, { useContext } from "react";
import { GlobelContexFn } from "./CreateContex";

export default function Text() {
 const {theme}=useContext(GlobelContexFn)
  return (
    <div>
      <h2
       style={{
        fontSize: theme === "light" ? "20px" : "30px",
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        padding:theme==='light'? "0px":"45px 0px"
      }}
      >Hello Mujithaba EP</h2>
    </div>
  );
}
