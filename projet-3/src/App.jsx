import './App.css'
import { RouterProvider } from 'react-router-dom'
import config from './router/router'
// import Home from './pages/Home/Home'




function App() {


  return (
    <>
      <RouterProvider router={ config } />
    </>

  )
}

export default App
