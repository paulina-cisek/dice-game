import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/stable';
import 'normalize.css';
import './index.css';
import App from './components/App/App';
import { combineReducers, createStore } from 'redux';
import diceReducer from './store/reducers/diceReducer';
import { Provider } from 'react-redux';
import gameReducer from './store/reducers/gameReducer';

const rootReducer = combineReducers({
  dice: diceReducer,
  game: gameReducer,
});
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
