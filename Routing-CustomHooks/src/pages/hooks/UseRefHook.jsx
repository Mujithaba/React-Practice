import React, { useEffect, useRef } from "react";

export default function UseRefHook() {
  const countValue = useRef(0);
  const divElementRef = useRef();
  const inputRef = useRef();

  function handleClick() {
    countValue.current++;
    console.log(countValue.current);
  }

  useEffect(() => {
    console.log(divElementRef.current);
    const divReference = divElementRef.current;
    setTimeout(() => {
      divReference.style.color = "red";
    }, 2000);
    setTimeout(() => {
      divElementRef.current.style.color = "green";
    }, 3000);
    const refInput= inputRef.current
   refInput.focus();
  }, []);
  return (
    <div>
      <h1>UseRef Hook Practice Component</h1>
      <button onClick={handleClick}>Click me</button>

      <div ref={divElementRef}>Some text for use ref</div>
      <input ref={inputRef} type="text" placeholder="Enter your name" />
    </div>
  );
}
