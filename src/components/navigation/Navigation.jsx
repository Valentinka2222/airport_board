import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

import { getflightsList } from '../../flights/flights.action';
import Calendar from '../calendar/Calendar';

import './navigation.scss';

const Navigation = ({
  value,
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
}) => {
  useEffect(() => {
    if (searchDate === undefined) {
      setSearchDate(moment().format('DD-MM-YYYY'));
    }
    if (searchDate === moment().format('DD-MM-YYYY')) {
      setIsActiveId('two');
    }
    getflightsList(searchDate);
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
            to={`/departures${searchDate ? `?date=${searchDate}` : ''}&${
              value ? `search=${value}` : ''
            }`}
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
            to={`/arrival${searchDate ? `?date=${searchDate}` : ''}&${
              value ? `search=${value}` : ''
            }`}
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
        searchDate={searchDate}
        onChangeCalendarDate={onChangeCalendarDate}
        handleGetDate={handleGetDate}
      />
    </div>
  );
};

Navigation.propTypes = {
  setIsActiveId: PropTypes.func.isRequired,
  setSearchDate: PropTypes.func.isRequired,
  setActiveLinkArrival: PropTypes.func,
  setActiveLinkDepartures: PropTypes.func,
  activeLinkArrival: PropTypes.string,
  activeLinkDepartures: PropTypes.string,
  value: PropTypes.string,
  handleGetDate: PropTypes.func.isRequired,
  onChangeCalendarDate: PropTypes.func.isRequired,
  setDepartures: PropTypes.func.isRequired,
  setArrivals: PropTypes.func.isRequired,
  isActiveId: PropTypes.string,
  searchDate: PropTypes.string,
  arrivals: PropTypes.string,
  departures: PropTypes.string,
};

export default Navigation;
