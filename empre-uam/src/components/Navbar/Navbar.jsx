// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import LogoNavbar from '../../assets/logos/PNG/Logos_UAM-07.png';
import "../../assets/css/Home.css"
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [user, setUser] = useState({});
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
          }
        })
        .catch(error => console.log(error));
    }
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
  }

  return (<nav>
    <div className="navbar-left">
      <div >
        <Link to={"/home"}>
          <img src={LogoNavbar} alt="logo" className="logo" />
        </Link>
      </div>
    </div>
    <div className="navbar-right">
      <ul>
        <li className="navbar-close-sesion">{user.nombre}</li>
        <Link to={"/"} onClick={logOut}>
          <li className="navbar-close-sesion">  Cerrar sesion</li>
        </Link>
      </ul>
    </div>
  </nav>);
};
