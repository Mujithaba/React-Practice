import React, { useContext } from "react";
import useCount from "../hooks/useCount";


export default function Card() {
  const { count,setCount } = useCount()
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
        reiciendis!
      </p>
      <b>Count: {count}</b>
      <button onClick={()=>setCount(count-1)}>-</button>
    </>
  );
}
