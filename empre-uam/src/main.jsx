import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/fonts/fonts.css';
import './assets/css/SolicitarAsesoria.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import { Login } from './views/Login.jsx';
import { NegociosHome } from './views/negocios/NegociosHome.jsx';
import { Home } from './views/Home.jsx';
import { Register } from './views/Register.jsx';
import { SolicitudAsesoria } from './views/asesorias/SolicitudAsesoria';
import { AsesoriasHome } from './views/asesorias/AsesoriasHome.jsx';
import { RegistroNegocio } from './views/negocios/RegistroNegocio.jsx';
import { SeguimientoIndividual } from './views/seguimientos/SeguimientoIndividual';
import App from './App.jsx';
import { AdminHome } from './views/admin/AdminHome.jsx';
import { ManejoAsesores } from './views/admin/ManejoAsesores.jsx';
import { ManejoEmprendedores } from './views/admin/ManejoEmprendedores.jsx';
import { ManejoAsesorias } from './views/admin/ManejoAsesorias.jsx';
import { SeguimientoHome } from './views/seguimientos/SeguimientoHome';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/negocios",
    element: <NegociosHome />,
  },
  {
    path: "/negocios/registro",
    element: <RegistroNegocio />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/asesorias",
    element: <AsesoriasHome />,
  },
  {
    path: "/asesorias/solicitud",
    element: <SolicitudAsesoria />,
  },
  {
    path: "/seguimientos",
    element: <SeguimientoHome />,
  },
  {
    path: "/seguimientos/:id",
    element: <SeguimientoIndividual />,
  },
  {
    path: "/AdminHome",
    element: <AdminHome />,
  },
  {
    path: "/ManejoAsesores",
    element: <ManejoAsesores />,
  },
  {
    path: "/ManejoEmprendedores",
    element: <ManejoEmprendedores />,
  },
  {
    path: "/ManejoAsesorias",
    element: <ManejoAsesorias />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
