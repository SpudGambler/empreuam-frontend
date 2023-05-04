import React, { useState } from "react";
import '../assets/fonts/fonts.css';
import '../assets/css/SolicitarAsesoria.css';
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

export const Solicitar = () => {

  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [cantidadPersonas, setCantidadPersonas] = useState("");
  const [tema, setTema] = useState("");
  const [sitio, setSitio] = useState("");
  const [certificacion, setCertificacion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      categoria,
      descripcion,
      cantidadPersonas,
      tema,
      sitio,
      certificacion,
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
  <section className="solicitar-asesoria">
    
    <div className="solicitar-form">
    <h1 className="title">Solicitud de Asesoria</h1>
    <form onSubmit={handleSubmit}>
      <div className="formGroup">
        {/* labels */}
        <div className="labels">
            <label htmlFor="categoria">Categoria:</label>
            <label htmlFor="descripcion">Descripcion:</label>
            <label htmlFor="cantidadPersonas">Cantidad de Personas:</label>
            <label htmlFor="tema">Tema:</label>
            <label htmlFor="sitio">Sitio:</label>
            <label htmlFor="certificacion">Certificacion:</label>
          </div>
        {/* inputs */}
        <div className="inputs">
          <input
            type="text"
            id="categoria"
            value={categoria}
            onChange={(event) => setCategoria(event.target.value)}
          />
          

          <input
            type=""
            id="descripcion"
            value={descripcion}
            onChange={(event) => setDescripcion(event.target.value)}
          />
          <input
            type="text"
            id="cantidadPersonas"
            value={cantidadPersonas}
            onChange={(event) => setCantidadPersonas(event.target.value)}
          />
          <input
            type="text"
            id="tema"
            value={tema}
            onChange={(event) => setTema(event.target.value)}
          />
          <input
            type="text"
            id="sitio"
            value={sitio}
            onChange={(event) => setSitio(event.target.value)}
          />
          
          <select 
            name="certificacion" 
            id="certificacion" 
            value={certificacion} 
            onChange={(event) => setCertificacion(event.target.value)} >
              <option value="1">Si</option>
              <option value="1">No</option>
          </select>

        </div>
      </div>
      <input type="submit" value="SOLICITAR" className="primary-button register-button" />
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