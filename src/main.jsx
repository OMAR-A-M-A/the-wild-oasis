import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { DarkModeContext } from "./context/DarkModeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeContext>
      <App />
    </DarkModeContext>
  </StrictMode>,
);
