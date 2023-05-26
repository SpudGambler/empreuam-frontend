// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import '../assets/fonts/fonts.css';
import '../assets/css/Home.css';

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

import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { NoAuthNavbar } from '../components/NoAuthNavbar/NoAuthNavbar';

export const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem("token");
      await fetch('http://localhost:3000/api/v1/auth', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      })
        .then(async (response) => {
          if (response.ok) {
            const body = await response.json();
            setUser(body);
          } else {
            navigate('/');
          }
        })
        .catch(error => console.log(error));
    }
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {user ? <Navbar /> : <NoAuthNavbar />}
      <section className="section1">
        <div>
          <img src={SoñarloImg} alt="soñarlo" className="soñarlo" />
        </div>
      </section>

      <section className="section2">

        <div className="negocio-container">
          <h1 className="negocio-title">Gestion de Negocios</h1>
          <img src={EquipoImg} className="negocio-logo" />
          <Link to={"/negocios"}>
            <input type="submit" value="Ingresar a Negocios" className="primary-button negocio-button" />
          </Link>
        </div>

        <div className="asesorias-container">
          <h1 className="asesorias-title">Gestion de Asesorias</h1>
          <img src={AsesoriaImg} className="asesoria-logo" />
          <Link to={"/solicitarAsesoria"}>
            <input type="submit" value="Ingresar a Asesorias" className="primary-button asesorias-button" />
          </Link>
        </div>

        <div className="seguimiento-container">
          <h1 className="seguimiento-title"> Seguimiento individual</h1>
          <img src={CheckList} className="seguimiento-logo" />
          <Link to={"/seguimiento"}>
            <input type="submit" value="Ingresar a Seguimientos" className="primary-button tareas-button" />
          </Link>
        </div>

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