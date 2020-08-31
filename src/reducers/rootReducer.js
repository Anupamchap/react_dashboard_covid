// import userDetails from './reducers/userDetails';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userData from './userData';
import timeSeriesData from './timeSeriesData';
import signup from './signup';
import login from './login';

export default combineReducers({
  userData,
  timeSeriesData,
  signup,
  login,
  router: routerReducer
});
