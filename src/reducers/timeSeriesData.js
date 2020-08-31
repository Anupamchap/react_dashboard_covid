import * as actionTypes from '../constants/actionTypes';

const defaultState = {
  timeSeries: [],
  errors: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INSERT_TIMESERIES_DATA:
      return {
        ...state,
        timeSeries: action.payload,
      };
    case actionTypes.INSERT_LATEST_TOTAL_DATA:
      return {
        ...state,
        totalData: action.payload,
      };
    case actionTypes.GET_TIMESERIES_DATA_ERROR:
      return {
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date(),
        }]),
        messages: [],
        requesting: false,
        successful: false,
      };
    default:
      return state;
  }
};
