import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className='className="min-h-screen bg-[#F8F7F3]'>
      <App />
    </div>
  </StrictMode>,
);
