import { createBrowserRouter } from "react-router-dom";

// importe de páginas
import Home from "@/pages/Home/Home.jsx";
import ErrorPage from "@/pages/ErrorPage";
import Reservas from "../../pages/Reservas/Reservas";
import { Galeria } from "../../components/Galeria/Galeria";
import Confirmada from "../../pages/Reservas/Confirmada";
// importe de páginas especiales
import Layout from "@/Layout";
import ProtectedConfirmada from "../../components/ProtectedConfirmada/ProtectedConfirmada";
import { Onboarding } from "../../components/Onboarding/Onboarding";
import { Privacidad } from "../../pages/Privacidad/Privacidad";

// import PrivateRoute from '@/components/PrivateRoute'
// import AdminRoute from '@/components/AdminRoute'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/reservas",
        element: <Reservas />,
      },
      {
        path: "/privacidad",
        element: <Privacidad />,
      },
      {
        /* ruta protegida para no poder ir directamente por params */
        path: "/reservas/confirmada",
        element: (
          <ProtectedConfirmada>
            <Confirmada />
          </ProtectedConfirmada>
        ),
      },
      {
        path: "/galeria",
        element: <Galeria />,
      },
      {
        path: "/onboarding",
        element: <Onboarding />,
      },

      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },

  // rutas solo para admin
  // {
  //     element: <AdminRoute />,
  //     children: [
  //         {
  //             element: <Layout />,
  //             children: [
  //                 {
  //                     path: '/agregar-actividad',
  //                     element: <AddActividadForm />
  //                 },
  //                 {
  //                     path: '/agregar-packs',
  //                     element: <AddPackForm />
  //                 }
  //             ]
  //         }
  //     ]
  // },
]);
export default router;
