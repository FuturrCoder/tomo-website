import NavBar from "./NavBar";
import Footer from "./Footer";
import NAV_LINKS from "./config/navbar.config";
import {Outlet} from "react-router-dom";

function PageLayout() {
  return (
    <>
      <NavBar links={NAV_LINKS}/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default PageLayout;