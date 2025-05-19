import React, { useContext } from "react";
import { GlobelContexFn } from "./CreateContex";

export default function Button() {
  const { handleTextStyle ,theme} = useContext(GlobelContexFn);
  return (
    <div>
      <button onClick={handleTextStyle}>
        Click Me
      </button>
    </div>
  );
}
