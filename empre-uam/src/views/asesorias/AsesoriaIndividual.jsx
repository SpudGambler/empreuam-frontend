// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import '../../assets/fonts/fonts.css';
import '../../assets/css/Seguimiento.css';
import LogoFooter from '../../assets/logos/PNG/Logos_UAM-03.png';
import LocationIcon from '../../assets/icons/location3.png';
import CalendarIcon from '../../assets/icons/calendar.png';
import PhoneIcon from '../../assets/icons/phone.png';
import FacebookIcon from '../../assets/icons/facebook.png';
import TwitterIcon from '../../assets/icons/twitter.png';
import InstagramIcon from '../../assets/icons/insta.png';
import { useParams } from 'react-router';

import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { NoAuthNavbar } from '../../components/NoAuthNavbar/NoAuthNavbar';

export const AsesoriaIndividual = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [followUp, setFollowUp] = useState({});

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
                        if (body.rol !== "e") {
                            if (body.rol === "as") {
                                navigate('/AsesoresHome');
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
        async function getFollowUp() {
            const url = 'http://localhost:3000/api/v1/followUps/' + id
            const token = localStorage.getItem("token");
            await fetch(url, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
            }).then(async (response) => await response.json()).then(({ data }) => {
                setFollowUp(data);
            })
        }
        getFollowUp();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            {user ? <Navbar /> : <NoAuthNavbar />}
            <h1 className="solicitudes-title">Asesoria {followUp.id} sobre {followUp.categoria_proyecto}</h1>
            <section className='seguimiento'>

                <div className='solicitudes-container'>
                    <h1 className="solicitudes-title">Sesiones</h1>
                    <div className='lista-solicitudes'>
                        <ul>
                            <table>
                                {/* {followUp.map(followUp => <tr key={followUp}>
                                    <td>{followUp.id} - </td>
                                    <td>{followUp.categoria_proyecto} - </td>
                                    <td>{followUp.status} - </td>
                                </tr>)} */}
                            </table>
                        </ul>
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