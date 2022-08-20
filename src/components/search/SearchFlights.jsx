import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as qs from 'query-string';

import { getflightsList } from '../../flights/flights.action';

import './search.scss';

const SearchFlights = ({ setValue, value, handleClick, searchDate }) => {
  const location = useLocation();
  const parsed = qs.parse(location);

  useEffect(() => {
    getflightsList(parsed.date);
  }, [parsed.date]);
  return (
    <div className="search-flights">
      <h2 className="title">SEARCH FLIGHT</h2>
      <div className="search-flights_container">
        <span className="icon-seach">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <form className="search-flights_container__search-lines" name="searchFlightsForm">
          <input
            className="search-input"
            type="text"
            placeholder="Airline, flight number #"
            onChange={e => setValue(e.target.value)}
            value={value}
          />
        </form>

        <Link
          onClick={handleClick}
          className="search-btn"
          to={`/departures${value ? `?search=${value}` : ''}&${
            searchDate ? `date=${searchDate}` : ''
          }`}
        >
          SEARCH
        </Link>
      </div>
    </div>
  );
};
SearchFlights.propTypes = {
  value: PropTypes.string,
  searchDate: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default SearchFlights;
