import React, { useState } from "react";
import Child from "./Child";

export default function Counter() {
  function handleClick() {
    setCount(count + 1);
  }

  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Count is : {count}</h3>
      <button onClick={handleClick}>Click</button>
      <Child count={500}/>
    </div>
  );
}
