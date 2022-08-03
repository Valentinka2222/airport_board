import * as flightsGateway from './flightsGetWay';

export const FLIGHTS_LIST_RECIEVED = 'FLIGHTS_LIST_RECIEVED';
export const FIND_FLIGHT = 'FIND_FLIGHT';
export const flightsListRecieved = flightsList => {
  const action = {
    type: FLIGHTS_LIST_RECIEVED,
    payload: {
      flightsListArrival: flightsList.body.arrival,
      flightsListDeparture: flightsList.body.departure,
    },
  };
  return action;
};

export const findFlight = flightNumber => {
  const action = {
    type: FIND_FLIGHT,
    flightNumber,
  };
  return action;
};

export const getflightsList = date =>
  function (dispatch) {
    flightsGateway
      .fetchFlightsListByDate(date)
      .then(flightsList => dispatch(flightsListRecieved(flightsList)));
  };
