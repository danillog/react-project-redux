import React, { useEffect, useState } from 'react';
import { MdFlightTakeoff } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import api from '../../services/api';
import './style.css';

export default function Home(){
  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);


  useEffect(() => {

    async function loadAPI(){
      const response = await api.get('trips');
      setTrips(response.data);
    }

    loadAPI();
  }, []);

  function handleAdd(trip){
    dispatch({
      type: 'ADD_RESERVE',
      trip
    });
  }

  return(
    <div className="box">
      {trips.map(trip => (
        <li key={trip.id}>
          <img src={trip.image}  alt="Foto do local" />
           <strong> { trip.title } </strong>
           <span> Status: {trip.status ? 'Disponível' : "Indisponível "} </span> 

          <button type="button" onClick={ () => handleAdd(trip) }> 
            <MdFlightTakeoff  size={16} color="#fff"/>
            <span> Solicitar Reseva </span> 
          </button> 
        </li>

      ))}
    </div>
  );
}