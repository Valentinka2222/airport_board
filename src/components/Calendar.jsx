import moment from 'moment';
import React, { useState } from 'react';
import '../calendar.scss';
import Days from './Days';

const Calendar = ({ handleGetDate, onChangeCalendarDate, calendarDate }) => {
  return (
    <div className="calendar">
      <div className="calender_picker">
        <span className="calendar_span">{calendarDate}</span>
        <input className="calendar_input" type="date" onChange={onChangeCalendarDate} />
      </div>
      <div className="calendar_dates" onClick={handleGetDate}>
        <Days text={'YESTERDAY'} dayDate={`${moment().add(-1, 'day')}`} />
        <Days text={'TODAY'} dayDate={`${moment()}`} />
        <Days text={'TOMORROW'} dayDate={`${moment().add(1, 'day')}`} />
      </div>
    </div>
  );
};

export default Calendar;
