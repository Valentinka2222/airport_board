import * as flightsGateway from './flightsGetWay';

export const FLIGHTS_LIST_RECIEVED = 'FLIGHTS_LIST_RECIEVED';
export const FIND_FLIGHT = 'FIND_FLIGHT';
export const flightsListRecieved = (flightsListArrival, flightsListDeparture) => {
  const action = {
    type: FLIGHTS_LIST_RECIEVED,
    payload: {
      flightsListArrival,
      flightsListDeparture,
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
    flightsGateway.fetchFlightsListByDate(date).then(flightsList => {
      console.log(flightsList);
      dispatch(flightsListRecieved(flightsList.body.arrival, flightsList.body.departure));
    });
  };
