import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { initializeUserInfo, updateNewRoundState, updateInputDate, updateSlideNumber, updateScoreCount, updateLinePlotState, updateScorecardState } from './reducers';

const rootReducer = combineReducers({ initializeUserInfo, updateNewRoundState, updateInputDate, updateSlideNumber, updateScoreCount, updateLinePlotState, updateScorecardState })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
