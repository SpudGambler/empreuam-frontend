import React, { useState } from "react";
import '../assets/fonts/fonts.css';
import '../assets/css/Register.css';
import LogoNavbar from '../assets/logos/PNG/Logos_UAM-07.png';
import Arrow from '../assets/icons/flechita.svg';

import LogoFooter from '../assets/logos/PNG/Logos_UAM-03.png';
import LocationIcon from '../assets/icons/location3.png';
import CalendarIcon from '../assets/icons/calendar.png';
import PhoneIcon from '../assets/icons/phone.png';
import FacebookIcon from '../assets/icons/facebook.png';
import TwitterIcon from '../assets/icons/twitter.png';
import InstagramIcon from '../assets/icons/insta.png';

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
          <img src={LocationIcon} className="footer-element-icon" />
          <div className='footer-element'>
            <div className='footer-element-title'>Direccion</div>
            <div className='footer-element-info'>Antigua estación del ferrocarril</div>
            <div className='footer-element-info'>Manizales, Caldas. Colombia</div>
          </div>
          <img src={CalendarIcon} className="footer-element-icon" />
          <div className='footer-element'>
            <div className='footer-element-title'>Horario</div>
            <div className='footer-element-info'>Lunes a Viernes</div>
            <div className='footer-element-info'>8 a.m a 6 p.m</div>
          </div>
          <img src={PhoneIcon} className="footer-element-icon" />
          <div className='footer-element'>
            <div className='footer-element-title'>Contactanos</div>
            <div className='footer-element-info'>Antigua estación del ferrocarril</div>
            <div className='footer-element-info'>Manizales, Caldas. Colombia</div>
          </div>
          <div className='footer-element'>
            <div className='footer-element-title'>Siguenos en Redes</div>
            <img src={FacebookIcon} className="social-media" />
            <img src={InstagramIcon} className="social-media" />
            <img src={TwitterIcon} className="social-media" />
          </div>
          <div className='footer-element'>
            <div className='footer-empreUAM-title'>2023 EmpreUAM</div>
          </div>
        </div>

        <div className="footer-bottom">
        </div>
    </footer>
  </section>
    </>
    
  )
}