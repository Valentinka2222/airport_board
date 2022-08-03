import React from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as qs from 'query-string';

import { getflightsList } from '../flights/flights.action';

import Calendar from './Calendar';
import '../navigation.scss';

const Navigation = ({
  onChangeCalendarDate,
  handleGetDate,
  handleClick,
  setSearchDate,
  setDepartures,
  setArrivals,
  arrivals,
  departures,
  searchDate,
  activeBtn,
  setActiveBtn,
}) => {
  const location = useLocation();
  const parsed = qs.parse(location.search);

  useEffect(() => {
    getflightsList(parsed.date);
  }, [searchDate]);
  return (
    <div className="navigation">
      <div className="navigation-btn">
        <button onClick={handleClick} className={`navigation_departures ${departures}`}>
          <span className="icon-plane">
            <i className="fa-solid fa-plane-departure"></i>
          </span>
          <Link to={`/departures${searchDate ? `?date=${searchDate}` : ''}`}>DEPARTURES</Link>
        </button>
        <button
          onClick={() => {
            setArrivals('white');
            setDepartures('');
          }}
          className={`navigation_arrivals ${arrivals} `}
        >
          <Link to={`/arrival${searchDate ? `?date=${searchDate}` : ''}`}>ARRIVALS</Link>

          <span className="icon-plane">
            <i className="fas fa-plane-arrival"></i>
          </span>
        </button>
      </div>

      <Calendar
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
        setSearchDate={setSearchDate}
        searchDate={searchDate}
        handleClick={handleClick}
        onChangeCalendarDate={onChangeCalendarDate}
        handleGetDate={handleGetDate}
      />
    </div>
  );
};

export default Navigation;
