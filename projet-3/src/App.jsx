import './App.css'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { customTheme } from './themes/custom'
import { CssBaseline } from "@mui/material"
import config from './router/router'

function App() {


  return (
    <>
      <ThemeProvider theme={customTheme}>
      <CssBaseline />
        <RouterProvider router={config} />
      </ThemeProvider>
    </>

  )
}

export default App
