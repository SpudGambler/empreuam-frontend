import React from 'react';
import '../assets/fonts/fonts.css';
import '../assets/css/Home.css';
import LogoNavbar from '../assets/logos/PNG/Logos_UAM-07.png';
import Arrow from '../assets/icons/flechita.svg';

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
  <section className="section1">
    <div>
      <img src={SoñarloImg} alt="soñarlo" className="soñarlo"/>
    </div>
  </section>
  
  <section className="section2">
      <div className="asesorias-container">
          <h1 className="asesorias-title"> Asesorias</h1>
          <img src={AsesoriaImg} className="asesoria-logo"/>
          <Link to={"/solicitarAsesoria"}>
            <input type="submit" value="SOLICITAR" className="primary-button asesorias-button" />
          </Link>
      </div>
      
      <div className="nosotros-container">
        <h1 className="nosotros-title"> Conoce sobre nosotros</h1>
        <img src={EquipoImg} className="nosotros-logo"/>
        <input type="submit" value="VER MAS" className="primary-button nosotros-button" formaction="../html/nosotros.html"/>
      </div>

      <div className="seguimiento-container">
        <h1 className="seguimiento-title"> Seguimiento individual</h1>
        <img src={CheckList} className="seguimiento-logo"/>
        <input type="submit" value="VER TAREAS" className="primary-button seguimiento-button" formaction="../html/asesorias.html"/>
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