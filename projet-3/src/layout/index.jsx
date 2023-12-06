import { Outlet } from "react-router"
import ResponsiveAppBar from '../components/NavBar/NavBar'

function Root() {
  return (
    <>
     <ResponsiveAppBar/>
     <Outlet />
    </>
  )
}

export default Root