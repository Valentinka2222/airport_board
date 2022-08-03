import moment from 'moment';
import React, { useEffect, useState } from 'react';
import '../calendar.scss';
import Days from './Days';
import { Link, useLocation } from 'react-router-dom';
import * as qs from 'query-string';

import { getflightsList } from '../flights/flights.action';
import '../calendar.scss';

const Calendar = ({
  handleClick,
  handleGetDate,
  onChangeCalendarDate,
  searchDate,
  activeBtn,
  setActiveBtn,
}) => {
  const [isActive, setIsActive] = useState(true);
  const stateToRender = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };
  const location = useLocation();
  const parsed = qs.parse(location.search);

  useEffect(() => {
    getflightsList(parsed.date);
  }, [parsed.date]);

  return (
    <div className="calendar">
      <div className="calender_picker">
        <span className="calendar_span">{searchDate}</span>
        <input className="calendar_input" type="date" onChange={onChangeCalendarDate} />
      </div>
      <div className="calendar_dates" onClick={handleGetDate}>
        <Days searchDate={searchDate} text={'YESTERDAY'} dayDate={`${moment().add(-1, 'day')}`} />
        <Link onClick={handleClick} to={`/departures${searchDate ? `?date=${searchDate}` : ''}`}>
          <Days searchDate={searchDate} text={'TODAY'} dayDate={`${moment()}`} />
        </Link>
        <Days searchDate={searchDate} text={'TOMORROW'} dayDate={`${moment().add(1, 'day')}`} />
      </div>
    </div>
  );
};

export default Calendar;
