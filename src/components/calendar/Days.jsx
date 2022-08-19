import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { getflightsList } from '../../flights/flights.action';

import * as qs from 'query-string';

export const Days = ({ handleGetDate, text, dayDate, isActiveId, id }) => {
  const location = useLocation();
  const parsed = qs.parse(location);

  useEffect(() => {
    getflightsList(parsed.date);
  }, [parsed.date]);
  return (
    <div
      onClick={handleGetDate}
      data-date={dayDate}
      data-id={id}
      className={`calendar_dates__day ${isActiveId === id ? 'border-blue' : ''}`}
    >
      {dayDate.slice(0, 5)}
      <Link
        data-id={id}
        data-date={dayDate}
        to={`/departures${dayDate ? `?date=${dayDate}` : ''}`}
        className="calendar_dates__name-day"
      >
        {text}
      </Link>
    </div>
  );
};
Days.propTypes = {
  handleGetDate: PropTypes.func.isRequired,
  isActiveId: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string,
  dayDate: PropTypes.string,
};

export default Days;
