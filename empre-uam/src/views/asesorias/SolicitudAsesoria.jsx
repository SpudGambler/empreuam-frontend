// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import '../../assets/fonts/fonts.css';
import '../../assets/css/SolicitarAsesoria.css';
import LogoFooter from '../../assets/logos/PNG/Logos_UAM-03.png';
import LocationIcon from '../../assets/icons/location3.png';
import CalendarIcon from '../../assets/icons/calendar.png';
import PhoneIcon from '../../assets/icons/phone.png';
import FacebookIcon from '../../assets/icons/facebook.png';
import TwitterIcon from '../../assets/icons/twitter.png';
import InstagramIcon from '../../assets/icons/insta.png';

import { useNavigate } from 'react-router-dom';
import { Navbar } from "../../components/Navbar/Navbar";
import { NoAuthNavbar } from "../../components/NoAuthNavbar/NoAuthNavbar";

export const SolicitudAsesoria = () => {
    const [categoria, setCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [negocio, setNegocio] = useState("");
    const [businesses, setBusinesses] = useState([]);

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
        async function getBusinesses() {
            const token = localStorage.getItem("token");
            await fetch('http://localhost:3000/api/v1/businesses/me', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
            }).then(async (response) => await response.json()).then(({ data }) => {
                setBusinesses(data);
            })
        }
        getBusinesses();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
            body: JSON.stringify({
                asesor_id: null,
                negocio_id: negocio,
                categoria_proyecto: categoria,
                descripcion: descripcion,
                status: "pendiente",
                fecha_inicio: null,
            })
        };
        fetch('http://localhost:3000/api/v1/followUps/followUp', requestOptions)
            .then(response => {
                if (response.ok) {
                    navigate('/asesorias');
                }
            });
    };

    return (
        <>
            {user ? <Navbar /> : <NoAuthNavbar />}
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
                                    {businesses.map(businessInfo => <option key={businessInfo.id} value={businessInfo.id}>{businessInfo.nombre}</option>)}
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

                        <input type="submit" value="SOLICITAR" className="primary-button login-button" />

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