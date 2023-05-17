import React from 'react';
import '../assets/fonts/fonts.css';
import '../assets/css/Home.css';
import LogoNavbar from '../assets/logos/PNG/Logos_UAM-07.png';

import SoñarloImg from '../assets/imgs/soñarlo.jpg';
import AsesoriaImg from '../assets/icons/recibir-asesoria.png';
import EquipoImg from '../assets/imgs/equipo.jpg';
import CheckList from '../assets/icons/checklist2.png';

import LogoFooter from '../assets/logos/PNG/Logos_UAM-03.png';
import LocationIcon from '../assets/icons/location3.png';
import CalendarIcon from '../assets/icons/calendar.png';
import PhoneIcon from '../assets/icons/phone.png';
import FacebookIcon from '../assets/icons/facebook.png';
import TwitterIcon from '../assets/icons/twitter.png';
import InstagramIcon from '../assets/icons/insta.png';

import { Link } from 'react-router-dom';

export const Home = () => {
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
  <section className="section1">
    <div>
      <img src={SoñarloImg} alt="soñarlo" className="soñarlo"/>
    </div>
  </section>
  
  <section className="section2">

    <div className="negocio-container">
      <h1 className="negocio-title"> Registrar Negocio</h1>
      <img src={EquipoImg} className="negocio-logo"/>
      <Link to={"/registroNegocio"}>
          <input type="submit" value="REGISTRAR NEGOCIO" className="primary-button negocio-button" />
      </Link>
    </div>

    <div className="asesorias-container">
        <h1 className="asesorias-title"> Asesorias</h1>
        <img src={AsesoriaImg} className="asesoria-logo"/>
        <Link to={"/solicitarAsesoria"}>
          <input type="submit" value="SOLICITAR" className="primary-button asesorias-button" />
        </Link>
    </div>

    <div className="seguimiento-container">
      <h1 className="seguimiento-title"> Seguimiento individual</h1>
      <img src={CheckList} className="seguimiento-logo"/>
      <Link to={"/seguimiento"}>
        <input type="submit" value="VER TAREAS" className="primary-button tareas-button" />
      </Link>
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