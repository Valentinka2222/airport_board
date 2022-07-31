import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './index.scss';
import App from './App';

const todoListElem = document.querySelector('#root');

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App} />
    <Redirect from="/" to="/departures" />
  </BrowserRouter>,
  todoListElem,
);
