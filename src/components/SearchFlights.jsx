import React from 'react';

const SearchFlights = () => {
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
            placeholder="Airline, destination or flight #"
            type="text"
          />
          <button className="search-btn" type="submit">
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchFlights;
