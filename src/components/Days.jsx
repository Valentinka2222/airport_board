import moment from 'moment';
import React, { useState } from 'react';
import '../calendar.scss';

export const Days = ({ text, date, count }) => {
  return (
    <div
      data-count={count}
      style={{
        borderBottom:
          count === 1 ? 'solid #1eb7ee 3px' : '' || count === 2 ? 'solid #1eb7ee 3px' : '',
      }}
      className="calendar_dates__day"
    >
      {date}
      <span className="calendar_dates__name-day">{text}</span>
    </div>
  );
};

export default Days;
