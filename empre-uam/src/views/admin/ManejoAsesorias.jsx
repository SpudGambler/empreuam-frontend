// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import '../../assets/css/ManejoAsesorias.css';

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

export const ManejoAsesorias = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [businesses, setBusinesses] = useState([]);
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

    return (
        <>
            {user ? <Navbar /> : <NoAuthNavbar />}
            <section className='sect1'>
            <section className='asesorias'>
                <div className='negocios-container'>
                    <h1 className="negocios-title"> Asesorias</h1>
                    <div className='lista-negocios'>
                        <ul>
                            {businesses.map(business => <h1 key={business}>{business.nombre}</h1>)}
                        </ul>
                    </div>
                </div>
                
            </section>
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
