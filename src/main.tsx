/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/default */
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@Components/HOC";
import App from "./App";
import "./tailwind.css";

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StrictMode>
  );
} else {
  throw new Error("Root element not found");
}
