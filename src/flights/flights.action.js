import * as flightsGateway from './flightsGetWay';

export const FLIGHTS_LIST_RECIEVED = 'FLIGHTS_LIST_RECIEVED';

export const flightsListRecieved = flightsList => {
  const action = {
    type: FLIGHTS_LIST_RECIEVED,
    payload: {
      flightsList,
    },
  };
  return action;
};

export const getflightsList = () => {
  return function (dispatch) {
    flightsGateway
      .fetchFlightsList()
      .then(flightsList => dispatch(flightsListRecieved(flightsList)));
  };
};
