import React, { useState } from "react";
import '../assets/fonts/fonts.css';
import '../assets/css/Login.css';
import LogoNavbar from '../assets/logos/PNG/Logos_UAM-07.png';
import Cupula from '../assets/imgs/antigua-estacion-del.jpg';
import EmprendimientoImg from '../assets/icons/emprendimiento1.png';
import Logo2 from '../assets/logos/PNG/Logos_UAM-08.png';
import LogoFooter from '../assets/logos/PNG/Logos_UAM-03.png';
import { Link } from 'react-router-dom';

export const Login = () => {

    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
          correo,
          contrasena,
          });
      };

  return (
    <>
    <nav>
        <div className="navbar-left">
            <div >
                <Link to={""}> 
                  <img src={LogoNavbar} alt="logo" className="logo" /> 
                </Link> 
              </div>
            <ul>
                <li>
                    <a href="./nosotros.html">Nosotros</a>
                </li>
            </ul>
        </div>
    </nav>
    <div className="index-img">
        <div className="bienvenidos">
            <h1 className="text1">BIENVENIDOS </h1>
            <h1 className="text1">EMPRENDEDORES</h1>
            <h3 className="text1">Por un gran 2023</h3>
        </div>
        <figure>
            <img src={Cupula} alt="cupula"/>
        </figure>
        
    </div>
    <div className="login">
        <div className="info-container">
            <h1 className="empreUAM-title"> EmpreUAM</h1>
            <p className="empreUAM-info">Facultad de emprendimiento de la Universidad Autonoma de Manizales</p>
            <div className="info-img">
                <img src={EmprendimientoImg} className="empre-img"/>
            </div>
        </div>
        <div className="form-container">
            <h1 className="login-title"> Acceso a EmpreUAM</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="email" class="label">Correo Electronico</label>
                <input
                    placeholder="example@mail.com"
                    class="input"
                    type="email"
                    id="correo"
                    value={correo}
                    onChange={(event) => setCorreo(event.target.value)}
                />

                <label htmlFor="contrasena" class="label">Contraseña:</label>
                <input
                    placeholder="*************"
                    class="input"
                    type="password"
                    id="contrasena"
                    value={contrasena}
                    onChange={(event) => setContrasena(event.target.value)}
                />
                <Link to={"/home"}>
                    <input type="submit" value="ACCEDER" className="primary-button login-button" />
                </Link>
            </form>
        </div>
        <div className="register-container">
            <h1 className="register-title"> Registrate</h1>
            <Link to={"/register"}>
                <input type="submit" value="REGISTRARSE" className="secondary-button register-button" />
            </Link>
            
            <img src={Logo2} alt="logo2" className="logo2"/>
        </div>
    </div>
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
