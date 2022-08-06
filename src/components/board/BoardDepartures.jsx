import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BoardTable from './BoardTable';

import { flightListDepartureSelector } from './../../flights/flights.selector';
import { getflightsList } from './../../flights/flights.action';
import { Columns } from './../../columns';

const BoardDepartures = ({ departureList, value, searchDate, getflightsList }) => {
  useEffect(() => {
    getflightsList(searchDate);
  }, [searchDate]);

  let renderFlights = departureList.map((row, index) => {
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
    departureList: flightListDepartureSelector(state),
  };
};

BoardDepartures.propTypes = {
  value: PropTypes.string,
  searchDate: PropTypes.string,
  getflightsList: PropTypes.func.isRequired,
  departureList: PropTypes.array,
};

export default connect(mapState, mapDispatch)(BoardDepartures);
