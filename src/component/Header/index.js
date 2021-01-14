import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/img/logo.svg";
import './style.css';

export default function Header() {
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
          <span>0 Reservas</span>
        </div>
      </Link> 
    </header>
  );
}
