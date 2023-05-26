// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../assets/fonts/fonts.css';
import '../assets/css/Seguimiento.css';
import LogoNavbar from '../assets/logos/PNG/Logos_UAM-07.png';



import LogoFooter from '../assets/logos/PNG/Logos_UAM-03.png';
import LocationIcon from '../assets/icons/location3.png';
import CalendarIcon from '../assets/icons/calendar.png';
import PhoneIcon from '../assets/icons/phone.png';
import FacebookIcon from '../assets/icons/facebook.png';
import TwitterIcon from '../assets/icons/twitter.png';
import InstagramIcon from '../assets/icons/insta.png';

import { Link } from 'react-router-dom';

export const Seguimiento = () => {
  return (
    <>
      <nav>
        <div className="navbar-left">
          <div >
            <Link to={"/home"}>
              <img src={LogoNavbar} alt="logo" className="logo" />
            </Link>
          </div>

        </div>
        <div className="navbar-right">
          <ul>
            <Link to={"/"}>
              <li className="navbar-close-sesion">Cerrar sesion</li>
            </Link>
          </ul>
        </div>
      </nav>
      <section className='seguimiento'>
        <div className='negocios-container'>
          <h1 className="negocios-title"> Negocios</h1>
          <div className='lista-negocios'>
            <h1>negocio1</h1>
            <h1>negocio2</h1>
            <h1>negocio3</h1>

          </div>
        </div>
        <div className='solicitudes-container'>
          <h1 className="solicitudes-title"> Solicitudes</h1>
          <div className='lista-solicitudes'>
            <h1>solicitud1</h1>
            <h1>solicitud2</h1>
            <h1>solicitud3</h1>
            <h1>solicitud4</h1>
            <h1>solicitud5</h1>
            <h1>solicitud6</h1>
            <h1>solicitud7</h1>
            <h1>solicitud8</h1>
          </div>
        </div>
      </section>
      <section className='tareas'>

      </section>

      <section>
        <footer className="footer">
          <div className="footer-content">
            <img src={LogoFooter} className="footer-logo" />
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