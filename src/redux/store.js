import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'; //middleware installed to help with debugging 

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;