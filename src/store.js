import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import flightsReducer from './flights/flights.reducer';

// const saveToLocalStorage = state => {
//   try {
//     localStorage.setItem('state', JSON.stringify(state));
//   } catch (e) {
//     console.error(e);
//   }
// };
// const loadFromLocalStorage = () => {
//   try {
//     const stateStr = localStorage.getItem('state');
//     return stateStr ? JSON.parse(stateStr) : undefined;
//   } catch (e) {
//     console.error(e);
//     return undefined;
//   }
// };

const reducer = combineReducers({
  flights: flightsReducer,
});

// const persistedStore = loadFromLocalStorage();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, persistedStore, composeEnhancers(applyMiddleware(thunk)));
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
// store.subscribe(() => {
//   saveToLocalStorage(store.getState());
// });
export default store;
