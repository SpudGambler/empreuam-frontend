// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import '../../assets/fonts/fonts.css';
import '../../assets/css/Home.css';
import '../../assets/css/AsesoresHome.css';

import Sonarlo from '../../assets/imgs/soñarlo.jpg';
import EquipoImg from '../../assets/imgs/equipo.jpg';

import LogoFooter from '../../assets/logos/PNG/Logos_UAM-03.png';
import LocationIcon from '../../assets/icons/location3.png';
import CalendarIcon from '../../assets/icons/calendar.png';
import PhoneIcon from '../../assets/icons/phone.png';
import FacebookIcon from '../../assets/icons/facebook.png';
import TwitterIcon from '../../assets/icons/twitter.png';
import InstagramIcon from '../../assets/icons/insta.png';

import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { NoAuthNavbar } from '../../components/NoAuthNavbar/NoAuthNavbar';

export const AsesoresHome = () => {
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
            if (body.rol !== "as") {
              if (body.rol === "e") {
                navigate('/home');
              } else if (body.rol === "ad") {
                navigate('/AdminHome');
              }
            }
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
          <img src={Sonarlo} alt="soñarlo" className="soñarlo" />
        </div>
      </section>

      <section className="section2">

        <div className="negocio-container">
          <h1 className="negocio-title">Asesorias</h1>
          <img src={EquipoImg} className="negocio-logo" />
          <Link to={"/AsesoriasAsesores"}>
            <input type="submit" value="Gestionar Asesorias" className="primary-button negocio-button" />
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