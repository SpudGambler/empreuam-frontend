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
          <input type="submit" value="SOLICITAR" className="primary-button asesorias-button" formaction="../html/solicitarAsesoria.html"/>
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
        </div>

        <div className="footer-bottom">
            
        </div>
    </footer>
  </section>
    </>
    
  )
}