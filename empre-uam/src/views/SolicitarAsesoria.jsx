import React, { useState } from "react";
import '../assets/fonts/fonts.css';
import '../assets/css/SolicitarAsesoria.css';
import LogoNavbar from '../assets/logos/PNG/Logos_UAM-07.png';

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
  const [negocio, setNegocio] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      categoria,
      descripcion,
      negocio,
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
            <li className="navbar-close-sesion">Cerrar sesion</li>
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
                <label htmlFor="Negocio">Negocio:</label>
              </div>
              <div className="inputs" >
                <select 
                  type="select"
                  id="tema"
                  value={negocio}
                  onChange={(event) => setNegocio(event.target.value)}>

                    <option value="Negocio1">Negocio1</option>
                    <option value="Negocio2">Negocio2</option>
                    <option value="Negocio3">Negocio3</option>
                    <option value="Negocio4">Negocio4</option>
                </select>
              </div>
              <div className="labels">
                <label htmlFor="categoria">Categoria Proyecto:</label>
              </div>
              {/* inputs */}
              <div className="inputs">
                <input
                  type="text"
                  id="categoria"
                  value={categoria}
                  onChange={(event) => setCategoria(event.target.value)}
                />
              </div>
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

            <input type="submit" value="SOLICITAR" className="primary-button register-button" />
          </form>
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