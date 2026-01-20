import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "@/lib/routes/router";
import { ReservaProvider } from "./context/ReservaContext.jsx";

createRoot(document.getElementById("root")).render(
  <ReservaProvider>
    <RouterProvider router={router} />
  </ReservaProvider>,
);
