import reducers from "./reducers";
import thunk from 'redux-thunk';
import {applyMiddleware , createStore} from 'redux';

export const store = createStore(reducers, {}, applyMiddleware(thunk))
