import loginReducer from '../../../reducers/login';
import * as actionTypes from '../../../constants/actionTypes';

const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
};

describe('actions', () => {
  it('LOGIN_SUCCESS reducer testing', () => {
    const action = { type: actionTypes.LOGIN_SUCCESS };
    const expectedAction = {
      errors: [],
      messages: [],
      requesting: false,
      successful: true,
    };
    expect(loginReducer(initialState, action)).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('LOGIN_ERROR reducer test', () => {
    const action = { type: actionTypes.LOGIN_ERROR, error: 'New Error' };
    const expectedAction = {
      errors: initialState.errors.concat([{
        body: 'New Error',
        time: new Date(),
      }]),
      messages: [],
      requesting: false,
      successful: false,
    };
    expect(loginReducer(initialState, action)).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const action = { type: actionTypes.LOGIN_REQUESTING };
    const expectedAction = {
      requesting: true,
      successful: false,
      messages: [{ body: 'Logging in...', time: new Date() }],
      errors: [],
    };
    expect(loginReducer(initialState, action)).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const action = { type: actionTypes.LOGIN_REQUESTING };
    const expectedAction = {
      requesting: true,
      successful: false,
      messages: [{ body: 'Logging in...', time: new Date() }],
      errors: [],
    };
    expect(loginReducer(initialState, action)).toEqual(expectedAction);
  });
});
