import React from 'react';

import { Provider } from 'react-redux';
import Navigation from './components/Navigation';
import SearchFlights from './components/SearchFlights';
import Board from './components/Board';

import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="search">
        <SearchFlights />
        <Navigation />
        <Board />
      </div>
    </Provider>
  );
};
export default App;
