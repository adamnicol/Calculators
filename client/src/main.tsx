import { createRoot } from "react-dom/client";
import { router } from "./routes.ts";
import { RouterProvider } from "react-router";
import { StrictMode } from "react";

import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
