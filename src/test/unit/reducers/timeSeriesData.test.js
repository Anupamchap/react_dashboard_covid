import timeSeriesData from '../../../reducers/timeSeriesData';
import * as actionTypes from '../../../constants/actionTypes';

const initialState = {
  timeSeries: [],
  errors: [],
};

describe('actions', () => {
  it('UPDATE_USER_DATA reducer testing', () => {
    const action = { type: actionTypes.INSERT_TIMESERIES_DATA, payload: ['a'] };
    const expectedAction = {
      timeSeries: ['a'],
      errors: [],
    };
    expect(timeSeriesData(initialState, action)).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('INSERT_LATEST_TOTAL_DATA reducer testing', () => {
    const action = { type: actionTypes.INSERT_LATEST_TOTAL_DATA, payload: ['a'] };
    const expectedAction = {
      totalData: ['a'],
      timeSeries: [],
      errors: [],
    };
    expect(timeSeriesData(initialState, action)).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('GET_TIMESERIES_DATA_ERROR reducer testing', () => {
    const action = { type: actionTypes.GET_TIMESERIES_DATA_ERROR, error: 'abc' };
    const expectedAction = {
      errors: initialState.errors.concat([{
        body: 'abc',
        time: new Date(),
      }]),
      messages: [],
      requesting: false,
      successful: false,
    };
    expect(timeSeriesData(initialState, action)).toEqual(expectedAction);
  });
});
