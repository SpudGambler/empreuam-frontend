import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './views/Login.jsx';
import { Home } from './views/Home.jsx';
import { Register } from './views/Register.jsx';
import { Solicitar } from './views/SolicitarAsesoria.jsx';
import App from './App.jsx';
import { BusinessRegister } from './views/businessRegister.jsx';
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
    path: "/register",
    element: <Register />,
  },
  {
    path: "/solicitarAsesoria",
    element: <Solicitar />,
  },
  {
    path: "/registroNegocio",
    element: <BusinessRegister />,
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
