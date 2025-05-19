import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GlobelSttate from "./contexApi/CreateContex.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <GlobelSttate>
    <App />
  </GlobelSttate>
  // </StrictMode>
);
