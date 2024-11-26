import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import Router from "@/router";

import { ThemeProvider } from "@/providers";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <main className="h-lvh p-6">
          <Router />
        </main>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
