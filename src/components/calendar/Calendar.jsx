import moment from 'moment';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as qs from 'query-string';

import Days from './Days';

import { getflightsList } from '../../flights/flights.action';
import './calendar.scss';

const Calendar = ({ handleClick, handleGetDate, onChangeCalendarDate, searchDate, isActiveId }) => {
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
        <Days
          isActiveId={isActiveId}
          id={'one'}
          searchDate={searchDate}
          text={'YESTERDAY'}
          dayDate={`${moment().add(-1, 'day')}`}
        />
        <Link onClick={handleClick} to={`/departures${searchDate ? `?date=${searchDate}` : ''}`}>
          <Days
            isActiveId={isActiveId}
            id={'two'}
            searchDate={searchDate}
            text={'TODAY'}
            dayDate={`${moment()}`}
          />
        </Link>
        <Days
          isActiveId={isActiveId}
          id={'three'}
          searchDate={searchDate}
          text={'TOMORROW'}
          dayDate={`${moment().add(1, 'day')}`}
        />
      </div>
    </div>
  );
};
Calendar.propTypes = {
  isActiveId: PropTypes.string,
  searchDate: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  handleGetDate: PropTypes.func.isRequired,
  onChangeCalendarDate: PropTypes.func.isRequired,
};
export default Calendar;
