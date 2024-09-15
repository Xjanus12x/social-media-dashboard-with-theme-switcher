import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import DarkmodeProvider from "./Darkmode.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkmodeProvider>
      <App />
    </DarkmodeProvider>
  </StrictMode>
);
