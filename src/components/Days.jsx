import moment from 'moment';
import React from 'react';

import '../calendar.scss';

export const Days = ({ text, dayDate, isActive }) => {
  return (
    <div data-date={dayDate} className={`calendar_dates__day ${isActive ? 'border-blue' : ''}`}>
      {moment(dayDate.toString()).format('DD/MM')}
      <span data-date={dayDate} className="calendar_dates__name-day">
        {text}
      </span>
    </div>
  );
};

export default Days;
