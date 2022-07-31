import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const SearchFlights = ({ setValue, value, handleClick }) => {
  const { search } = useLocation();
  console.log(search);

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
          to={`/departures${value ? `?search=${value}` : ''}`}
        >
          SEARCH
        </Link>
      </div>
    </div>
  );
};

export default SearchFlights;
