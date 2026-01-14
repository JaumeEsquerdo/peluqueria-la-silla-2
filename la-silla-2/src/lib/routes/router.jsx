import { createBrowserRouter } from "react-router";

// importe de páginas
import Home from "@/pages/Home";
import ErrorPage from "@/pages/ErrorPage";
import Reservas from "../../pages/Reservas";

// importe de páginas especiales
import Layout from "@/Layout";
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
