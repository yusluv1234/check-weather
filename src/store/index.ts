import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import alertReducer from './reducers/alertReducer';
import weatherReducer from './reducers/weatherReducer';


const rootReducer = combineReducers({
  weather: weatherReducer,
  alert: alertReducer
});

const store: Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;