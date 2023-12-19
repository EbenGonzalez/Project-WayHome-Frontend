import { createBrowserRouter, redirect } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Root from '../layout'
import PageAdoption from '../pages/PageAdoption/PageAdoption'
import PageEmbrace from '../pages/PageEmbrace/PageEmbrace'
import NotFound from '../pages/NotFound/NotFound'
import PageVoluntarios from '../pages/PageVoluntarios/PageVoluntarios'
import SignInSide from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import DashBoard from '../pages/DashBoard/DashBoard'
import Voluntario from '../pages/Voluntario/Voluntario'
import Pet from '../pages/Pet/Pet'
import Mypets from '../pages/MyPets/Mypets'
import QuienesSomos from '../pages/QuienesSomos/QuienesSomos'
import Contacto from '../pages/Contacto/Contacto'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <SignInSide/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  },
  {
    path: '/',
    element: < Root />,
    loader: () => {
      if (!localStorage.getItem("token")) {
        return redirect("/login")
      } else {
        return null;
      }
    },
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/adopcion',
        element: <PageAdoption />,
        loader: () => {
          if (!localStorage.getItem("token")) {
            return redirect("/login")
          } else {
            return null;
          }
        }
      },
      {
        path: '/acogida',
        element: <PageEmbrace/>,
        loader: () => {
          if (!localStorage.getItem("token")) {
            return redirect("/login")
          } else {
            return null;
          }
        }
      },
      {
        path: '/mascota/:id',
        element: <Pet/>
      },
      {
        path: '/voluntarios',
        element: <PageVoluntarios />,
      },
      {
        path: '/voluntarios/:id',
        element: <Voluntario />
      },
      {
        path: '/perfil',
        element: <DashBoard/>
      },
      {
        path: '/perfil/misMascotas',
        element: <Mypets/>
      },
      {
        path: '/quienesSomos',
        element: <QuienesSomos />
      },
      {
        path: '/contacto',
        element: <Contacto />
      },
    ]
  }
])

export default router