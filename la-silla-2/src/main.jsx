import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "@/lib/routes/router";
import { ReservaProvider } from "./context/ReservaContext.jsx";
import { OnboarindProvider } from "./context/OnboardingProvider.jsx";

createRoot(document.getElementById("root")).render(
  <OnboarindProvider>
    <ReservaProvider>
      <RouterProvider router={router} />
    </ReservaProvider>
  </OnboarindProvider>,
);
