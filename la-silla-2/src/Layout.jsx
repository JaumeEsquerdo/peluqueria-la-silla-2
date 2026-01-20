import { Footer } from "@/components/Footer/Footer";
import { Outlet } from "react-router";
import "./index.css";

function Layout() {
  return (
    <>
      <Outlet />

      <Footer />
    </>
  );
}

export default Layout;
