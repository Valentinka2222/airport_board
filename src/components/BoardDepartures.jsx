import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as qs from 'query-string';

import BoardTable from './BoardTable';

import { flightListDepartureSelector } from '../flights/flights.selector';
import { getflightsList } from '../flights/flights.action';
import { Columns } from '../columns';

const BoardDepartures = ({ departure, value, searchDate, getflightsList }) => {
  const location = useLocation();
  const parsed = qs.parse(location.search);

  useEffect(() => {
    getflightsList(parsed.date);
  }, [searchDate]);

  let renderFlights = departure.map((row, index) => {
    Columns.map((col, index) => {
      if (col.name === 'Destination') {
        col.accessor = 'airportToID.city_en';
      }
    });
    return row;
  });
  if (value) {
    const filterArr = renderFlights.filter(el => {
      let filter = el.codeShareData.filter(elem =>
        elem.codeShare.toLowerCase().includes(value.toLowerCase()),
      );
      if (JSON.stringify(el).includes(JSON.stringify(filter))) {
        return el;
      }
    });
    renderFlights = filterArr;
  }
  return (
    <div className="board">
      {renderFlights.length === 0 ? (
        <span className="span">
          <p>No Flights</p>
        </span>
      ) : (
        <BoardTable renderFlights={renderFlights} />
      )}
    </div>
  );
};

const mapDispatch = {
  getflightsList: getflightsList,
};

const mapState = state => {
  return {
    departure: flightListDepartureSelector(state),
  };
};

export default connect(mapState, mapDispatch)(BoardDepartures);
