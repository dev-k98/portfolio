import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const mainContainer = document.getElementById("root") as HTMLElement;
const root = createRoot(mainContainer);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
