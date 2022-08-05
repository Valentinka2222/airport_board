import React from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as qs from 'query-string';
import moment from 'moment';

import { getflightsList } from '../../flights/flights.action';
import Calendar from '../calendar/Calendar';

import './navigation.scss';

const Navigation = ({
  setIsActiveId,
  setSearchDate,
  onChangeCalendarDate,
  handleGetDate,
  setDepartures,
  setArrivals,
  arrivals,
  departures,
  searchDate,
  isActiveId,
  setActiveLinkArrival,
  setActiveLinkDepartures,
  activeLinkArrival,
  activeLinkDepartures,
  handleClick,
}) => {
  const location = useLocation();
  const parsed = qs.parse(location.search);

  useEffect(() => {
    if (searchDate === undefined) {
      setSearchDate(moment().format('DD-MM-YYYY'));
    }
    if (searchDate === moment().format('DD-MM-YYYY')) {
      setIsActiveId('two');
    }
    getflightsList(parsed.date);
  }, [searchDate]);
  return (
    <div className="navigation">
      <div className="navigation-btn">
        <button
          onClick={() => {
            setActiveLinkArrival('link-white');
            setActiveLinkDepartures('link-blue');
            setArrivals('blue');
            setDepartures('white');
          }}
          className={`navigation_departures ${departures}`}
        >
          <span className="icon-plane">
            <i className="fa-solid fa-plane-departure"></i>
          </span>
          <Link
            className={activeLinkDepartures}
            to={`/departures${searchDate ? `?date=${searchDate}` : ''}`}
          >
            DEPARTURES
          </Link>
        </button>
        <button
          onClick={() => {
            setActiveLinkArrival('link-blue');
            setActiveLinkDepartures('link-white');
            setArrivals('white');
            setDepartures('blue');
          }}
          className={`navigation_arrivals ${arrivals} `}
        >
          <Link
            className={activeLinkArrival}
            to={`/arrival${searchDate ? `?date=${searchDate}` : ''}`}
          >
            ARRIVALS
          </Link>

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
  setActiveLinkArrival: PropTypes.func,
  setActiveLinkDepartures: PropTypes.func,
  activeLinkArrival: PropTypes.string,
  activeLinkDepartures: PropTypes.string,
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
