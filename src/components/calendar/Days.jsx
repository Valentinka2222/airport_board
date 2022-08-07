import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Days = ({ searchDate, handleGetDate, text, dayDate, isActiveId, id }) => {
  return (
    <Link
      to={`/departures${searchDate ? `?date=${searchDate}` : ''}`}
      onClick={handleGetDate}
      data-date={dayDate}
      data-id={id}
      className={`calendar_dates__day ${isActiveId === id ? 'border-blue' : ''}`}
    >
      {dayDate.slice(0, 5)}
      <span data-id={id} data-date={dayDate} className="calendar_dates__name-day">
        {text}
      </span>
    </Link>
  );
};
Days.propTypes = {
  handleGetDate: PropTypes.func.isRequired,
  searchDate: PropTypes.string,
  isActiveId: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string,
  dayDate: PropTypes.string,
};

export default Days;
