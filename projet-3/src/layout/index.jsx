import { Outlet } from "react-router"
import ResponsiveAppBar from '../components/NavBar/NavBar'
import Footer from "../components/Footer/Footer"
import BasicBreadcrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { customThemeFooter } from "../themes/customFooter";
import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"


function Root() {
  return (
    <>
     <ResponsiveAppBar/>
     <BasicBreadcrumbs/>
     <Outlet />
     <ThemeProvider theme={customThemeFooter}>
     <CssBaseline/>
     <Footer />
     </ThemeProvider>
    </>
  )
}

export default Root