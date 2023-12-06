import './App.css'
import { RouterProvider } from 'react-router-dom'
import config from './router/router'

function App() {


  return (
    <>
      <RouterProvider router={ config } />
    </>

  )
}

export default App
