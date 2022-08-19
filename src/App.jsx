import React, { useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as qs from 'query-string';
import moment from 'moment';

import Navigation from './components/navigation/Navigation';
import SearchFlights from './components/search/SearchFlights';
import BoardArrival from './components/board/BoardArrival';
import BoardDepartures from './components/board/BoardDepartures';

import { getflightsList } from './flights/flights.action';
import store from './store';

const App = () => {
  const [value, setValue] = useState('');
  const [activeLinkArrival, setActiveLinkArrival] = useState('link-white');
  const [activeLinkDepartures, setActiveLinkDepartures] = useState('link-white');
  const [departures, setDepartures] = useState('');
  const [arrivals, setArrivals] = useState('');
  const [searchDate, setSearchDate] = useState(moment().format('DD-MM-YYYY'));
  const [isActiveId, setIsActiveId] = useState('');
  const location = useLocation();
  const parsed = qs.parse(location.search);

  useEffect(() => {
    getflightsList(parsed.date);
    setSearchDate(parsed.date);
    if (location.pathname.slice(1, 9) === 'arrival') {
      setArrivals('white');
      setDepartures('');
      setActiveLinkArrival('link-blue');
      setActiveLinkDepartures('link-white');
    }
    if (location.pathname.slice(1, 11) === 'departures') {
      setDepartures('white');
      setArrivals('');
      setActiveLinkArrival('link-white');
      setActiveLinkDepartures('link-blue');
    }
  }, [location]);

  const handleClick = () => {
    setDepartures('white');
    setArrivals('');
  };
  const onChangeCalendarDate = e => {
    setIsActiveId('');
    setSearchDate(moment(e.target.value).format('DD-MM-YYYY'));
  };

  const handleGetDate = e => {
    setSearchDate(e.target.dataset.date);
    setIsActiveId(e.target.dataset.id);
  };

  return (
    <Provider store={store}>
      <Switch>
        <Route path="/">
          <div className="search">
            <SearchFlights
              searchDate={searchDate}
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
                value={value}
                setIsActiveId={setIsActiveId}
                setSearchDate={setSearchDate}
                setActiveLinkArrival={setActiveLinkArrival}
                setActiveLinkDepartures={setActiveLinkDepartures}
                activeLinkArrival={activeLinkArrival}
                activeLinkDepartures={activeLinkDepartures}
                isActiveId={isActiveId}
                searchDate={searchDate}
                onChangeCalendarDate={onChangeCalendarDate}
                handleGetDate={handleGetDate}
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
