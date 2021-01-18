import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";
import './style.css';

export default function Header() {
  const reserveSize = useSelector(state => state.reserve.length)
  return (
    <header className="container">
      <Link to="/">
      
        <img
          className="logo"
          src={Logo}
          alt="Logo do projeto no formato de avião voando"
        />
      </Link>
      <Link to="/reservas" className="reserva"> 
        <div> 
          <strong>Minhas Reservas</strong>
          <span>{ reserveSize } Reservas</span>
        </div>
      </Link> 
    </header>
  );
}
