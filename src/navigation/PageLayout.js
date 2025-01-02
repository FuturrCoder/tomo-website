import NavBar from "./NavBar";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";
import NAV_LINKS from "./constants";

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