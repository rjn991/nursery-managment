import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ViewSeeds from "./Pages/viewSeeds.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/viewSeeds" element={<ViewSeeds/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
