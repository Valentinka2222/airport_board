import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Calendar from './Calendar';
const Navigation = ({ handleClick, setDepartures, setArrivals, arrivals, departures }) => {
  return (
    <div className="navigation">
      <div className="navigation-btn">
        <button onClick={handleClick} className={`navigation_departures ${departures}`}>
          <span className="icon-plane">
            <i className="fa-solid fa-plane-departure"></i>
          </span>
          <Link to="/board/departures">DEPARTURES</Link>
        </button>
        <button
          onClick={() => {
            setArrivals('white');
            setDepartures('');
          }}
          className={`navigation_arrivals ${arrivals} `}
        >
          <Link to="/board/arrival">ARRIVALS</Link>

          <span className="icon-plane">
            <i className="fas fa-plane-arrival"></i>
          </span>
        </button>
      </div>
      <Calendar />
    </div>
  );
};

export default Navigation;
