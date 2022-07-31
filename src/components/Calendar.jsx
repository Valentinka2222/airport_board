import moment from 'moment';
import React, { useState } from 'react';
import '../calendar.scss';
import Days from './Days';

const Calendar = () => {
  const [count, setCount] = useState(0);
  const handleClick = e => {
    let next = count + 1;
    if (next === 4) {
      next = 0;
    }

    setCount(next);
  };
  return (
    <div className="calendar">
      <div className="calender_picker">
        <span className="calendar_span">{moment().format('DD/MM')}</span>
        <input className="calendar_input" type="date" />
      </div>
      <div className="calendar_dates" onClick={handleClick}>
        <Days
          count={count}
          text={'YESTERDAY'}
          date={`${moment().add(-1, 'day').format('DD/MM')}`}
        />
        <Days count={count} text={'TODAY'} date={moment().format('DD/MM')} />
        <Days count={count} text={'TOMORROW'} date={`${moment().add(1, 'day').format('DD/MM')}`} />
      </div>
    </div>
  );
};

export default Calendar;
