import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { chatReducers } from './reducers/chatReducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  chatState: chatReducers,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
