import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as qs from 'query-string';

import { flightListArrivalSelector } from './../../flights/flights.selector';
import { getflightsList } from './../../flights/flights.action';

import BoardTable from './BoardTable';
import { Columns } from './../../columns';

const BoardArrival = ({ arrivalList, value, searchDate, getflightsList }) => {
  const location = useLocation();
  const parsed = qs.parse(location.search);

  useEffect(() => {
    getflightsList(parsed.date);
  }, [searchDate]);

  let renderFlights = arrivalList.map((row, index) => {
    Columns.map((col, index) => {
      if (col.name === 'Destination') {
        col.accessor = 'airportFromID.city_en';
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
    arrivalList: flightListArrivalSelector(state),
  };
};

BoardArrival.propTypes = {
  value: PropTypes.string,
  searchDate: PropTypes.string,
  getflightsList: PropTypes.func.isRequired,
  arrivalList: PropTypes.array,
};
export default connect(mapState, mapDispatch)(BoardArrival);
