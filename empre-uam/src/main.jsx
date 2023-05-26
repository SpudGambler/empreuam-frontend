import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import { Login } from './views/Login.jsx';
import { NegociosHome } from './views/negocios/negociosHome.jsx';
import { Home } from './views/Home.jsx';
import { Register } from './views/Register.jsx';
import { Solicitar } from './views/SolicitarAsesoria.jsx';
import { RegistroNegocio } from './views/negocios/RegistroNegocio.jsx';
import App from './App.jsx';
import { Seguimiento } from './views/Seguimiento.jsx';
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
    path: "/solicitarAsesoria",
    element: <Solicitar />,
  },
  {
    path: "/seguimiento",
    element: <Seguimiento />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
