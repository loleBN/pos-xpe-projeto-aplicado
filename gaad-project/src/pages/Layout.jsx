import { Outlet, Link } from "react-router-dom";
import ResponsiveAppBar from "../components/AppBar";

const Layout = () => {
  return (
    <>
    <ResponsiveAppBar/>
    <Outlet />
    </>
  )
};

export default Layout;