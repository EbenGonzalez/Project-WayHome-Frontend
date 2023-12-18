import './App.css'
import { useState, useMemo  } from 'react'

import { RouterProvider } from 'react-router-dom'
import config from './router/router'
import { customTheme } from './themes/custom'

import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"


function App() {

  return (
    <>
   
      <ThemeProvider theme={ customTheme }>
      <CssBaseline />
        <RouterProvider router={ config } />
      </ThemeProvider>
      
    </>

  )
}

export default App
