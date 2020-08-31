import sagaHelper, { runSaga } from 'redux-saga-testing';
import 'jest';
import { call, put } from 'redux-saga/effects';
import * as actionTypes from '../../constants/actionTypes';
import signupApi from '../../sagas';

// const api = jest.fn();

function* signupFlow() {
  const action = { payload: { email: 'anu10@anu10.com', password: '12345678', fullName: 'Anu anu' } };

  try {
    const { email, password, fullName } = action.payload;
    const response = yield call(signupApi, email, password, fullName);
    console.log(response);
    yield put({ type: actionTypes.UPDATE_USER_DATA, payload: response });
    localStorage.setItem('userData', JSON.stringify(response));
    yield put({ type: actionTypes.SIGNUP_SUCCESS, response });
  } catch (error) {
    yield put({ type: actionTypes.SIGNUP_ERROR, error });
  }
}

// Test 1: Successfull login
describe('When testing a very simple Saga', () => {
  const it = sagaHelper(signupFlow());

  it('call signupApi', (result) => {
    console.log(result);
    expect(result).toEqual(call(
      signupApi,
      'anu10@anu10.com',
      '12345678',
      'Anu anu'
    ));

    return [{
      displayName: null,
      email: 'anu10@anu10.com',
      fullName: 'anupam10',
      photoURL: null,
      uid: 'Trx9SshgsZPLMnFpp9oh8TpjLTk2'
    }];
  });

  it('update user data action', (result) => {
    expect(result).toEqual(put({
      type: actionTypes.UPDATE_USER_DATA,
      payload: [{
        displayName: null,
        email: 'anu10@anu10.com',
        fullName: 'anupam10',
        photoURL: null,
        uid: 'Trx9SshgsZPLMnFpp9oh8TpjLTk2',
      }]
    }));
  });

  it('SIGNUP_SUCCESS', (result) => {
    console.log(result);
    expect(result).toEqual(put({
      type: actionTypes.SIGNUP_SUCCESS,
      response: [{
        displayName: null,
        email: 'anu10@anu10.com',
        fullName: 'anupam10',
        photoURL: null,
        uid: 'Trx9SshgsZPLMnFpp9oh8TpjLTk2',
      }]
    }));
  });

  it('action for SIGNUP_ERROR', (result) => {
    expect(result).toEqual(undefined);
  });
});
