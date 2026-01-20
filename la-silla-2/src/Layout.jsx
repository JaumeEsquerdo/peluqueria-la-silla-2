import { Footer } from "@/components/Footer/Footer";
import { Outlet } from "react-router";
import "./index.css";
import { Header } from "./components/Header/Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />

      <Footer />
    </>
  );
}

export default Layout;
