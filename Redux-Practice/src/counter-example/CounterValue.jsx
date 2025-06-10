import React from "react";
import { useSelector } from "react-redux";

export default function CounterValue() {
    const {counterValue} = useSelector(state=> state.counterSotre)
    console.log(counterValue);
    
  return (
    <div>
      <p>Conter value is : {counterValue}</p>
    </div>
  );
}
