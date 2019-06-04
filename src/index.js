import React from 'react';
import { render } from 'react-dom';
import {
  applyMiddleware,
  compose,
  combineReducers,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import donateReducer from './reducer/donate';
import App from './components/App';

const reducer = combineReducers({
  donate: donateReducer,
});

const composeEnhancers = compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk),
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
