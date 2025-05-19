import { createContext, useState } from "react";

export const GlobelContexFn = createContext(null);

export default function GlobelSttate({ children }) {
  const [theme, setTheme] = useState("light");

  const handleTextStyle =()=>{
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <GlobelContexFn.Provider value={{theme,handleTextStyle}}>
        {children}
    </GlobelContexFn.Provider>
  );
}
