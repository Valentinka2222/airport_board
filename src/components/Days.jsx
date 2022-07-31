import moment from 'moment';
import React, { useState } from 'react';
import '../calendar.scss';

export const Days = ({ text, dayDate }) => {
  return (
    <div
      data-date={dayDate}
      // style={{
      //   borderBottom:
      //     count === 1 ? 'solid #1eb7ee 3px' : '' || count === 2 ? 'solid #1eb7ee 3px' : '',
      // }}
      className="calendar_dates__day"
    >
      {moment(new Date(dayDate)).format('DD/MM')}
      <span data-date={dayDate} className="calendar_dates__name-day">
        {text}
      </span>
    </div>
  );
};

export default Days;
