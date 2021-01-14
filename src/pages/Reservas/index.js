import React from 'react';
import { MdDelete } from 'react-icons/md';
import './style.css';

export default function Reservas(){
  return(
    <div>
      <h1> Vocẽ solicitou 1 reserva </h1>
      
      <div className="reservas">
        <img src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg"
        alt="Imagem de praia em MAceió" />
        
        <strong> Viagem maceio 7 dias </strong>
        <span> Quantidade: 2 </span>
        <button 
          type= "button"
          onClick={ () => {} }>
        <MdDelete size={20} color="#fff" /> 
        </button>
      </div>
      <footer>
        <button type="button"> Solicitar Reservas </button>
      </footer>

    </div>
  );
}