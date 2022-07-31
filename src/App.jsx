import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navigation from './components/Navigation';
import SearchFlights from './components/SearchFlights';
import BoardArrival from './components/BoardArrival';
import BoardDepartures from './components/BoardDepartures';
import React, { useEffect, useState } from 'react';
import store from './store';

const App = () => {
  const [value, setValue] = useState('');
  const [departures, setDepartures] = useState('');
  const [arrivals, setArrivals] = useState(false);
  const handleClick = e => {
    setDepartures('white');
    setArrivals('');
  };
  return (
    <Provider store={store}>
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

        <Navigation
          handleClick={handleClick}
          setArrivals={setArrivals}
          departures={departures}
          arrivals={arrivals}
          setDepartures={setDepartures}
        />

        <Switch>
          <Route path="/board/departures">
            <BoardDepartures value={value} setValue={setValue} />
          </Route>
          <Route path="/board/arrival">
            <BoardArrival value={value} setValue={setValue} />
          </Route>
        </Switch>
      </div>
    </Provider>
  );
};
export default App;
