import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { ThemeProvider } from "@/providers";
import { MainLayout } from "@/layouts";

import Router from "@/router";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <MainLayout>
          <Router />
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
