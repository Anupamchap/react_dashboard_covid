import signup from '../../../reducers/signup';
import * as actionTypes from '../../../constants/actionTypes';

const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
};

describe('actions', () => {
  it('SIGNUP_REQUESTING reducer testing', () => {
    const action = { type: actionTypes.SIGNUP_REQUESTING };
    const expectedAction = {
      requesting: true,
      successful: false,
      messages: [{ body: 'Signing up...', time: new Date() }],
      errors: [],
    };
    expect(signup(initialState, action)).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('SIGNUP_SUCCESS reducer testing', () => {
    const action = { type: actionTypes.SIGNUP_SUCCESS, response: { email: 'a@a.com' } };
    const expectedAction = {
      errors: [],
      messages: [{
        body: 'Successfully created account for a@a.com',
        time: new Date(),
      }],
      requesting: false,
      successful: true,
    };
    expect(signup(initialState, action)).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('SIGNUP_ERROR reducer testing', () => {
    const action = { type: actionTypes.SIGNUP_ERROR, error: 'abc' };
    const expectedAction = {
      errors: initialState.errors.concat([{
        body: 'abc',
        time: new Date(),
      }]),
      messages: [],
      requesting: false,
      successful: false,
    };
    expect(signup(initialState, action)).toEqual(expectedAction);
  });
});
