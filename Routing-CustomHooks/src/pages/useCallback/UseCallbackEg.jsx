import React, { useCallback, useState } from "react";
import Counter from "./Counter";

export default function UseCallbackEg() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const handleCountOne = useCallback(() => {
    setCountOne(countOne + 1);
  }, [countOne]);

  const handleCountTwo = useCallback(() => {
    setCountTwo(countTwo + 1);
  }, [countTwo]);

  return (
    <div>
      <h1>useCallback Example</h1>
      <Counter countValue={countOne} onClick={handleCountOne} />
      <Counter countValue={countTwo} onClick={handleCountTwo} />
    </div>
  );
}
