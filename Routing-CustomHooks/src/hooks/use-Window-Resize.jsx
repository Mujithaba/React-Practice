import React, { useLayoutEffect, useState } from "react";

export default function useWindowResize() {
  const [windowResize, setWindowResize] = useState({
    width: 0,
    height: 0,
  });

  function handleResize() {
    setWindowResize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useLayoutEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowResize;
}
