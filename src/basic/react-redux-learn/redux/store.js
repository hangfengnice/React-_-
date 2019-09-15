import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from './reducers'

const store = createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store
