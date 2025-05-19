import React, { useEffect, useState } from "react";
import ProductItem from "./components/ProductItem";

export default function ProductList({ dummyData }) {
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);
  const [changeStyle, setChangeStyle] = useState(false);

  function toggleTxt() {
    setFlag(!flag);
  }

  useEffect(() => {
    setFlag(!flag);
    console.log("updated...");
  }, []);

  const IncreaseTheCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count == 10) setChangeStyle(!changeStyle);
  }, [count]);

  return (
    <div>
      <h3>ProductList</h3>

      {flag ? <p>Toggled the text</p> : <h2>Hello world</h2>}
      <button onClick={toggleTxt}>Toggle me</button>

      <h3>Count is: {count}</h3>

      <button
        style={{
          backgroundColor: changeStyle ? "black" : "white",
          color: changeStyle ? "white" : "black",
        }}
        onClick={IncreaseTheCount}
      >
        Increase Count
      </button>

    </div>
  );
}
