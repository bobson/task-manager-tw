import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import { NavigationProvider } from "./context/navigation_context.jsx";
import { ThemeProvider } from "./context/theme_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </NavigationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
