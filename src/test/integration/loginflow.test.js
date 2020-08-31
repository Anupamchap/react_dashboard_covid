import sagaHelper, { runSaga } from 'redux-saga-testing';
import 'jest';
import { call, put } from 'redux-saga/effects';
import * as actionTypes from '../../constants/actionTypes';
import loginApi from '../../sagas';

// const api = jest.fn();

function* loginFlow() {
  try {
    const response = yield call(
      loginApi,
      'anu10@anu10.com',
      '12345678'
    );
    yield put({ type: actionTypes.UPDATE_USER_DATA, payload: response });
    localStorage.setItem('userData', JSON.stringify(response));
    yield put({ type: actionTypes.LOGIN_SUCCESS });
  } catch (error) {
    yield put({ type: actionTypes.LOGIN_ERROR, error });
  }
}

// Test 1: Successfull login
describe('When testing a very simple Saga', () => {
  const it = sagaHelper(loginFlow());

  it('call loginapi', (result) => {
    console.log(result);
    expect(result).toEqual(call(
      loginApi,
      'anu10@anu10.com',
      '12345678'
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

  it('LOGIN SUCCESS', (result) => {
    console.log(result);
    expect(result).toEqual(put({ type: actionTypes.LOGIN_SUCCESS }));
  });

  it('action for Login ERROR', (result) => {
    expect(result).toEqual(undefined);
  });
});
