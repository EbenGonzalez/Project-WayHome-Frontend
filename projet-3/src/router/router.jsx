import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Root from '../layout'
import PageAdoption from '../pages/PageAdoption/PageAdoption'
import PageAcogida from '../pages/PageAcogida/PageAcogida'
import NotFound from '../pages/NotFound/NotFound'
import PageVoluntarios from '../pages/PageVoluntarios/PageVoluntarios'
import SignInSide from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'

const router = createBrowserRouter([
  {
    path: '/',
    element: < Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/adopcion',
        element: <PageAdoption />
      },
      {
        path: '/acogida',
        element: <PageAcogida/>
      },
      {
        path: '/voluntarios',
        element: <PageVoluntarios />
      },
      {
        path: '/login',
        element: <SignInSide/>
      },
      {
        path: '/signup',
        element: <SignUp/>
      },

    ]
  }

])

export default router