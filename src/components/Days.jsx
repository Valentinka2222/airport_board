import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';

import '../calendar.scss';

export const Days = ({ text, dayDate, isActiveId, id }) => {
  return (
    <div
      data-date={dayDate}
      data-id={id}
      className={`calendar_dates__day ${isActiveId === id ? 'border-blue' : ''}`}
    >
      {moment(dayDate.toString()).format('DD/MM')}
      <span data-id={id} data-date={dayDate} className="calendar_dates__name-day">
        {text}
      </span>
    </div>
  );
};
Days.propTypes = {
  isActiveId: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string,
  dayDate: PropTypes.string,
};

export default Days;
