import moment from 'moment';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Days from './Days';

import { getflightsList } from '../../flights/flights.action';
import './calendar.scss';

const Calendar = ({ handleGetDate, onChangeCalendarDate, searchDate, isActiveId }) => {
  useEffect(() => {
    getflightsList(searchDate);
  }, [searchDate]);

  return (
    <div className="calendar">
      <div className="calender_picker">
        <span className="calendar_span">{searchDate}</span>
        <input className="calendar_input" type="date" onChange={onChangeCalendarDate} />
      </div>
      <div className="calendar_dates">
        <Days
          handleGetDate={handleGetDate}
          isActiveId={isActiveId}
          id={'one'}
          searchDate={searchDate}
          text={'YESTERDAY'}
          dayDate={`${moment().add(-1, 'day').format('DD-MM-YYYY')}`}
        />

        <Days
          handleGetDate={handleGetDate}
          isActiveId={isActiveId}
          id={'two'}
          searchDate={searchDate}
          text={'TODAY'}
          dayDate={`${moment().format('DD-MM-YYYY')}`}
        />

        <Days
          handleGetDate={handleGetDate}
          isActiveId={isActiveId}
          id={'three'}
          searchDate={searchDate}
          text={'TOMORROW'}
          dayDate={`${moment().add(1, 'day').format('DD-MM-YYYY')}`}
        />
      </div>
    </div>
  );
};
Calendar.propTypes = {
  isActiveId: PropTypes.string,
  searchDate: PropTypes.string,
  handleGetDate: PropTypes.func.isRequired,
  onChangeCalendarDate: PropTypes.func.isRequired,
};
export default Calendar;
