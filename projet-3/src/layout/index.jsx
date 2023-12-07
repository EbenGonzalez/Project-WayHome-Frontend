import { Outlet } from "react-router"
import ResponsiveAppBar from '../components/NavBar/NavBar'
import Footer from "../components/Footer/Footer"


function Root() {
  return (
    <>
     <ResponsiveAppBar/>
     <Outlet />
     <Footer />
    </>
  )
}

export default Root