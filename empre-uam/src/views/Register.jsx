import React, { useState } from "react";
import '../assets/fonts/fonts.css';
import '../assets/css/Register.css';
import LogoNavbar from '../assets/logos/PNG/Logos_UAM-07.png';
import Arrow from '../assets/icons/flechita.svg';

import LogoFooter from '../assets/logos/PNG/Logos_UAM-03.png';
import { Link } from 'react-router-dom';

    
 
export const Register = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [documento, setDocumento] = useState("");
    const [correo, setCorreo] = useState("");
    const [celular, setCelular] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [confirmarContrasena, setConfirmarContrasena] = useState("");
  

    
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log({
        nombre,
        apellido,
        documento,
        correo,
        celular,
        contrasena,
        confirmarContrasena,
        });
    };

  return (
    <>
    <nav>
      <div className="navbar-left">
          <div >
                <Link to={"/"}> 
                    <img src={LogoNavbar} alt="logo" className="logo" /> 
                </Link> 
            </div>
          <ul>
              <li>
                  <a href="/html/nosotros.html">Nostros</a>
              </li>
              <li>
                  <a href="./solicitarAsesoria.html">Asesorias</a>
              </li>
          </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email">platzi@example.com</li>
          <li className="navbar-arrow">
              <img src={Arrow} alt="arrow" className="arrow"/>
          </li>
      </ul>
    </div>
  </nav>
  <section className="sec1">
    
    <div className="register-form">
    <h1 className="title">Registro EmpreUAM</h1>
    <form onSubmit={handleSubmit}>
      <div className="formGroup">
        {/* labels */}
        <div className="labels">
            <label htmlFor="nombre">Nombre:</label>
            <label htmlFor="apellido">Apellido:</label>
            <label htmlFor="documento">Documento:</label>
            <label htmlFor="correo">Correo:</label>
            <label htmlFor="celular">Celular:</label>
            <label htmlFor="contrasena">Contraseña:</label>
            <label htmlFor="confirmarContrasena">Confirmar contraseña:</label>
          </div>
        {/* inputs */}
        <div className="inputs">
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(event) => setApellido(event.target.value)}
          />
          <input
            type="text"
            id="documento"
            value={documento}
            onChange={(event) => setDocumento(event.target.value)}
          />
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(event) => setCorreo(event.target.value)}
          />
          <input
            type="celular"
            id="celular"
            value={celular}
            onChange={(event) => setCelular(event.target.value)}
          />
          <input
            type="password"
            id="contrasena"
            value={contrasena}
            onChange={(event) => setContrasena(event.target.value)}
          />
          <input
            type="password"
            id="confirmarContrasena"
            value={confirmarContrasena}
            onChange={(event) => setConfirmarContrasena(event.target.value)}
          />
        </div>
      </div>
      <input type="submit" value="REGISTRARSE" className="primary-button register-button" />
    </form>
    </div>
  </section>
  
  
  
  <section>
    <footer className="footer">
        <div className="footer-content">
        <img src={LogoFooter} className="footer-logo"/>
        </div>

        <div className="footer-bottom">
            
        </div>
    </footer>
  </section>
    </>
    
  )
}