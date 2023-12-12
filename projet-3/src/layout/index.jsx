import { Outlet } from "react-router"
import ResponsiveAppBar from '../components/NavBar/NavBar'
import Footer from "../components/Footer/Footer"
import BasicBreadcrumbs from "../components/BreadCrumbs/BreadCrumbs";


function Root() {
  return (
    <>
     <ResponsiveAppBar/>
     <BasicBreadcrumbs/>
     <Outlet />
     <Footer />
    </>
  )
}

export default Root