
import reducer from './reducer'

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
// Note: this API requires redux@>=3.1.0
const store = createStore(reducer, enhancer);


export default store