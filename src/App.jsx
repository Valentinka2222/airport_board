import React, { useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as qs from 'query-string';
import moment from 'moment';

import Navigation from './components/Navigation';
import SearchFlights from './components/SearchFlights';
import BoardArrival from './components/BoardArrival';
import BoardDepartures from './components/BoardDepartures';

import { getflightsList } from './flights/flights.action';
import store from './store';

const App = () => {
  const [value, setValue] = useState('');
  const [departures, setDepartures] = useState('');
  const [arrivals, setArrivals] = useState('');
  const [searchDate, setSearchDate] = useState(`${moment().format('DD-MM-YYYY')}`);
  const [isActiveId, setIsActiveId] = useState('');
  const location = useLocation();
  const parsed = qs.parse(location.search);

  useEffect(() => {
    getflightsList(parsed.date);
    setSearchDate(parsed.date);
    if (location.pathname.slice(1, 9) === 'arrival') {
      setArrivals('white');
      setDepartures('');
    }
    if (location.pathname.slice(1, 11) === 'departures') {
      setDepartures('white');
      setArrivals('');
    }
  }, [parsed.date]);

  const handleClick = () => {
    setDepartures('white');
    setArrivals('');
  };
  const onChangeCalendarDate = e => {
    setSearchDate(`${moment(e.target.value).format('DD-MM-YYYY')}`);
  };

  const handleGetDate = e => {
    setSearchDate(`${moment(e.target.dataset.date).format('DD-MM-YYYY')}`);
    setIsActiveId(e.target.dataset.id);
  };

  return (
    <Provider store={store}>
      <Switch>
        <Route path="/">
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
            <Route path="/">
              <Navigation
                isActiveId={isActiveId}
                searchDate={searchDate}
                onChangeCalendarDate={onChangeCalendarDate}
                handleGetDate={handleGetDate}
                handleClick={handleClick}
                setArrivals={setArrivals}
                departures={departures}
                arrivals={arrivals}
                setDepartures={setDepartures}
              />
            </Route>

            <Route path="/departures">
              <BoardDepartures searchDate={searchDate} value={value} setValue={setValue} />
            </Route>
            <Route path="/arrival">
              <BoardArrival searchDate={searchDate} value={value} setValue={setValue} />
            </Route>
          </div>
        </Route>
      </Switch>
    </Provider>
  );
};

export default App;
