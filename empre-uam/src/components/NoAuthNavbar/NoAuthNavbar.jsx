// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import LogoNavbar from '../../assets/logos/PNG/Logos_UAM-07.png';

export const NoAuthNavbar = () => {
    return (
        <nav>
            <div className="navbar-left">
                <div >
                    <Link to={""}>
                        <img src={LogoNavbar} alt="logo" className="logo" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
