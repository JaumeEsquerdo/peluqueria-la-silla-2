import { Footer } from "@/components/Footer/Footer";
// import { Header } from "./components/Header";
import { Outlet } from "react-router";
import "./index.css";

function Layout() {
  return (
    <>
      {/* <Header /> */}
      <Outlet />

      <Footer />
    </>
  );
}

export default Layout;
