import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { Toaster } from "sonner";

import "./tailwind.css";
import { AuthProvider } from "./contexts/auth-context";

const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("./pages/index-page"),
  },
  {
    path: "/admin",
    lazy: () => import("./pages/admin-page"),
    loader: () =>
      window.document.cookie.indexOf("accessToken=") === -1
        ? redirect("/admin/entrar")
        : null,
  },
  {
    path: "/admin/entrar",
    loader: () =>
      window.document.cookie.indexOf("accessToken=") === -1
        ? null
        : redirect("/admin"),
    lazy: () => import("./pages/admin-entrar-page"),
  },
]);

const container = document.getElementById("root");

if (container === null) {
  throw new Error("Element #container not found");
}

createRoot(container).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster richColors />
  </StrictMode>,
);
