import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../search.scss';

const SearchFlights = ({ setValue, value, handleClick }) => {
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
            placeholder="Airline, destination or flight #"
            onChange={e => setValue(e.target.value)}
            value={value}
          />
        </form>

        <Link
          onClick={handleClick}
          className="search-btn"
          to={`board/departures${value ? `?search=${value}` : ''}`}
        >
          SEARCH
        </Link>
      </div>
    </div>
  );
};
SearchFlights.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default SearchFlights;
