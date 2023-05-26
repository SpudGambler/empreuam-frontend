// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

import LogoFooter from '../../assets/logos/PNG/Logos_UAM-03.png';
import LocationIcon from '../../assets/icons/location3.png';
import CalendarIcon from '../../assets/icons/calendar.png';
import PhoneIcon from '../../assets/icons/phone.png';
import FacebookIcon from '../../assets/icons/facebook.png';
import TwitterIcon from '../../assets/icons/twitter.png';
import InstagramIcon from '../../assets/icons/insta.png';

import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { NoAuthNavbar } from '../../components/NoAuthNavbar/NoAuthNavbar';

export const ManejoEmprendedores = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [entrepreneurs, setEntrepreneurs] = useState([]);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [documento, setDocumento] = useState("");
    const [correo, setCorreo] = useState("");
    const [celular, setCelular] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [confirmarContrasena, setConfirmarContrasena] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nombre: nombre,
                apellido: apellido,
                documento: documento,
                password: contrasena,
                rol: 'e',
                email: correo,
                celular: celular
            })
        };
        fetch('http://localhost:3000/api/v1/auth/register/entrepreneur', requestOptions)
            .then((response) => {
                if (response.ok) {
                    window.location.reload(false);
                }
            })
            .catch(error => console.log(error));
    };

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
                        if (body.rol !== "ad") {
                            if (body.rol === "e") {
                                navigate('/home');
                            }
                        }
                    } else {
                        navigate('/');
                    }
                })
                .catch(error => console.log(error));
        }
        getUser();
        async function getEntrepreneurs() {
            const token = localStorage.getItem("token");
            await fetch('http://localhost:3000/api/v1/users', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
            }).then(async (response) => await response.json()).then(({ data }) => {
                setEntrepreneurs(data.filter((user) => user.rol === "e"));
            })
        }
        getEntrepreneurs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {user ? <Navbar /> : <NoAuthNavbar />}
            <section className='seguimiento'>
                <div className='negocios-container'>
                    <h1 className="negocios-title"> Emprendedores</h1>
                    <div className='lista-negocios'>
                        <ul>
                            {entrepreneurs.map(entrepreneur => <h1 key={entrepreneur}>{entrepreneur.nombre}</h1>)}
                        </ul>
                    </div>
                </div>
                <div className='negocios-container'>
                    <div className="register-form">
                        <h1 className="title">Registro Emprendedores</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="formGroup">
                                {/* labels */}
                                <div className="labels">
                                    <label htmlFor="nombre">Nombre:</label>
                                    <label htmlFor="apellido">Apellido:</label>
                                    <label htmlFor="documento">Documento:</label>
                                    <label htmlFor="correo">Correo:</label>
                                    <label htmlFor="celular">Celular:</label>
                                    <label htmlFor="contrasena">Contraseña:</label>
                                    <label htmlFor="confirmarContrasena">Confirmar contraseña:</label>
                                </div>
                                {/* inputs */}
                                <div className="inputs">
                                    <input
                                        type="text"
                                        id="nombre"
                                        value={nombre}
                                        onChange={(event) => setNombre(event.target.value)}
                                    />
                                    <input
                                        type="text"
                                        id="apellido"
                                        value={apellido}
                                        onChange={(event) => setApellido(event.target.value)}
                                    />
                                    <input
                                        type="text"
                                        id="documento"
                                        value={documento}
                                        onChange={(event) => setDocumento(event.target.value)}
                                    />
                                    <input
                                        type="email"
                                        id="correo"
                                        value={correo}
                                        onChange={(event) => setCorreo(event.target.value)}
                                    />
                                    <input
                                        type="celular"
                                        id="celular"
                                        value={celular}
                                        onChange={(event) => setCelular(event.target.value)}
                                    />
                                    <input
                                        type="password"
                                        id="contrasena"
                                        value={contrasena}
                                        onChange={(event) => setContrasena(event.target.value)}
                                    />
                                    <input
                                        type="password"
                                        id="confirmarContrasena"
                                        value={confirmarContrasena}
                                        onChange={(event) => setConfirmarContrasena(event.target.value)}
                                    />
                                </div>
                            </div>
                            {/* <Link to={"/home"}> */}
                            <input type="submit" value="REGISTRARSE" className="primary-button login-button" />
                            {/* </Link> */}
                        </form>
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
