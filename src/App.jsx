import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navigation from './components/Navigation';
import SearchFlights from './components/SearchFlights';

import BoardArrival from './components/BoardArrival';
import BoardDepartures from './components/BoardDepartures';
import { fetchFlightsListByDate } from './flights/flightsGetWay';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import store from './store';

const App = () => {
  const [value, setValue] = useState('');
  const [departures, setDepartures] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [arrivals, setArrivals] = useState(false);
  const [searchDate, setSearchDate] = useState(`${moment().format('DD-MM-YYYY')}`);
  const [calendarDate, setCalendarDate] = useState(`${moment().format('DD/MM/YY')}`);
  const handleClick = () => {
    setDepartures('white');
    setArrivals('');
    setIsActive(true);
  };
  const onChangeCalendarDate = e => {
    setSearchDate(e.target.value);
    fetchFlightsListByDate(e.target.value);
    setCalendarDate(`${moment(new Date(e.target.value)).format('DD/MM/YY')}`);
  };

  const handleGetDate = e => {
    setSearchDate(e.target.dataset.date);
    setCalendarDate(`${moment(new Date(e.target.dataset.date)).format('DD/MM/YY')}`);

    fetchFlightsListByDate(e.target.dataset.date);
  };
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/board">
          <div className="search">
            <SearchFlights
              setValue={setValue}
              value={value}
              setArrivals={setArrivals}
              departures={departures}
              arrivals={arrivals}
              setDepartures={setDepartures}
              handleClick={handleClick}
            />
            <Route path="/board">
              <Navigation
                setIsActive={setIsActive}
                calendarDate={calendarDate}
                onChangeCalendarDate={onChangeCalendarDate}
                handleGetDate={handleGetDate}
                handleClick={handleClick}
                setArrivals={setArrivals}
                departures={departures}
                arrivals={arrivals}
                setDepartures={setDepartures}
              />
            </Route>

            <Route path="/board/departures">
              <BoardDepartures searchDate={searchDate} value={value} setValue={setValue} />
            </Route>
            <Route path="/board/arrival">
              <BoardArrival searchDate={searchDate} value={value} setValue={setValue} />
            </Route>
          </div>
        </Route>
      </Switch>
    </Provider>
  );
};
export default App;
