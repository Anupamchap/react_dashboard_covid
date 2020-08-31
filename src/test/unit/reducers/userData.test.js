import userData from '../../../reducers/userData';
import * as actionTypes from '../../../constants/actionTypes';

const initialState = {};

describe('actions', () => {
  it('UPDATE_USER_DATA reducer testing', () => {
    const action = { type: actionTypes.UPDATE_USER_DATA, payload: 'ABC' };
    const expectedAction = {
      userData: 'ABC',
    };
    expect(userData(initialState, action)).toEqual(expectedAction);
  });
});
