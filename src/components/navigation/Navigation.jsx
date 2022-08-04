import React from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as qs from 'query-string';

import { getflightsList } from '../../flights/flights.action';
import Calendar from '../calendar/Calendar';

import './navigation.scss';

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
  isActiveId,
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
        isActiveId={isActiveId}
        setSearchDate={setSearchDate}
        searchDate={searchDate}
        handleClick={handleClick}
        onChangeCalendarDate={onChangeCalendarDate}
        handleGetDate={handleGetDate}
      />
    </div>
  );
};

Navigation.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleGetDate: PropTypes.func.isRequired,
  onChangeCalendarDate: PropTypes.func.isRequired,
  setSearchDate: PropTypes.func,
  setDepartures: PropTypes.func.isRequired,
  setArrivals: PropTypes.func.isRequired,
  isActiveId: PropTypes.string,
  searchDate: PropTypes.string,
  arrivals: PropTypes.string,
  departures: PropTypes.string,
};

export default Navigation;
