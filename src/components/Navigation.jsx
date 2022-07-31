import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Calendar from './Calendar';
const Navigation = ({
  setIsActive,
  onChangeCalendarDate,
  handleGetDate,
  handleClick,
  setDepartures,
  setArrivals,
  arrivals,
  departures,
  calendarDate,
}) => {
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
            setIsActive(false);
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
      <Calendar
        calendarDate={calendarDate}
        handleClick={handleClick}
        onChangeCalendarDate={onChangeCalendarDate}
        handleGetDate={handleGetDate}
      />
    </div>
  );
};

export default Navigation;
