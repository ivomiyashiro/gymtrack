import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import Router from "@/router";

import { ThemeProvider } from "@/providers";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="p-6">
          <Router />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
