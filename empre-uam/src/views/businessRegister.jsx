import React, { useState } from "react";
import '../assets/fonts/fonts.css';
import '../assets/css/businessRegister.css';
import LogoNavbar from '../assets/logos/PNG/Logos_UAM-07.png';

import LogoFooter from '../assets/logos/PNG/Logos_UAM-03.png';
import LocationIcon from '../assets/icons/location3.png';
import CalendarIcon from '../assets/icons/calendar.png';
import PhoneIcon from '../assets/icons/phone.png';
import FacebookIcon from '../assets/icons/facebook.png';
import TwitterIcon from '../assets/icons/twitter.png';
import InstagramIcon from '../assets/icons/insta.png';

import { Link } from 'react-router-dom';
 
export const BusinessRegister = () => {

  const [nombreNegocio, setNombreNegocio] = useState("");
  const [sector, setSector] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (event) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        nombre: nombreNegocio,
        sector: sector,
        descripcion: descripcion,
      })
    };
    fetch('http://localhost:3000/api/v1/users/user/entreprenaur', requestOptions)
        .then(response => response.json());

    event.preventDefault();
    console.log({
      nombre,
      sector,
      descripcion,
      });
  };

  return (
    <>
    <nav>
      <div className="navbar-left">
          <div >
                <Link to={"/home"}> 
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
    
    <div className="negocio-form">
    <h1 className="title">Registrar Negocio</h1>
    <form onSubmit={handleSubmit}>
      <div className="formGroup">
        {/* labels */}
        <div className="labels">
            <label htmlFor="nombreNegocio">Nombre del Negocio:</label>
            <label htmlFor="sector">Sector:</label>
          </div>
        {/* inputs */}
        <div className="inputs">
          <input
            type="text"
            id="nombre"
            value={nombreNegocio}
            onChange={(event) => setNombreNegocio(event.target.value)}
          />
          <input
            type="text"
            id="sector"
            value={sector}
            onChange={(event) => setSector(event.target.value)}
          />
        </div>
        <div className="formGroup">
          <div className="labels">
            <label htmlFor="descripcion">Descripcion:</label>
          </div>
          <div className="inputs">
            <textarea
              className="textarea"
              id="descripcion"
              value={descripcion}
              onChange={(event) => setDescripcion(event.target.value)}
              cols="53"
              rows="8">
            </textarea>
          </div>
        </div>

      </div>
      
      <Link to={"/home"}>
        <input type="submit" value="REGISTRAR NEGOCIO" className="primary-button login-button" />
      </Link>

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