import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Root from '../layout'
import PageAdoption from '../pages/PageAdoption/PageAdoption'
import PageAcogida from '../pages/PageAcogida/PageAcogida'

const router = createBrowserRouter([
  {
    path: '/',
    element: < Root />,
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

    ]
  }

])

export default router