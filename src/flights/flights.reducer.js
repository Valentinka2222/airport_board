import { FLIGHTS_LIST_RECIEVED, FIND_FLIGHT } from './flights.action';

const initialState = {
  flightsListArrival: [],
  flightsListDeparture: [],
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_LIST_RECIEVED: {
      return {
        ...state,
        flightsListArrival: action.payload.flightsListArrival,
        flightsListDeparture: action.payload.flightsListDeparture,
      };
    }
    case FIND_FLIGHT: {
      return {
        ...state,
        flightsListArrival: newflightsListArrival,
        flightsListDeparture: newflightsListDeparture,
      };
    }
    default:
      return state;
  }
};
export default flightsReducer;
