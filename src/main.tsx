import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import "./tailwind.css";

const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("./pages/index-page"),
  },
  {
    path: "/admin",
    lazy: () => import("./pages/admin-page"),
    loader: async () =>
      window.document.cookie.indexOf("accessToken=") === -1
        ? redirect("/admin/login")
        : null,
  },
  {
    path: "/admin/login",
    lazy: () => import("./pages/admin-login-page"),
  },
]);

const container = document.getElementById("root");

if (container === null) {
  throw new Error("Element #container not found");
}

createRoot(container).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
