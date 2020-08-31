import { put, call, takeLatest } from 'redux-saga/effects';
import {
  getTimeSeriesDocuments,
  auth,
  signOut,
  generateUserDocument,
  getUserDocument
} from './firebase';

import * as actionTypes from './constants/actionTypes';

export const createLatestTotalPayload = (day0, day1) => {
  return {
    totalConfirmed: day0.totalconfirmed,
    totalDeceased: day0.totaldeceased,
    totalRecovered: day0.totalrecovered,
    totalActive: (
      day0.totalconfirmed
      - day0.totaldeceased
      - day0.totalrecovered
    ).toString(),
    totalConfirmedPercentageChange: (
      ((day0.totalconfirmed - day1.totalconfirmed) * 100)
      / day1.totalconfirmed
    ).toFixed(2),
    totalDeceasedPercentageChange: (
      ((day0.totaldeceased - day1.totaldeceased) * 100)
      / day1.totaldeceased
    ).toFixed(2),
    recoveredPercentage: (
      (day0.totalrecovered * 100)
      / day0.totalconfirmed
    ).toFixed(2),
    activePercentage: (
      ((day0.totalconfirmed - day0.totaldeceased - day0.totalrecovered) * 100)
      / day0.totalconfirmed
    ).toFixed(2),
    deceasedPercentage: (
      (day0.totaldeceased * 100)
      / day0.totalconfirmed
    ).toFixed(2)
  };
};

export const signupApi = async (email, password, fullName) => {
  const { user } = await auth.createUserWithEmailAndPassword(email, password);
  const userData = await generateUserDocument(user, fullName);
  return userData;
};

export const loginApi = async (email, password) => {
  const { user } = await auth.signInWithEmailAndPassword(email, password);
  const userData = await getUserDocument(user.uid);
  return userData;
};

export const logoutApi = async () => {
  await signOut();
  return [];
};

function* getTimeSeriesData() {
  try {
    const response = yield call(() => getTimeSeriesDocuments());
    yield put({ type: actionTypes.INSERT_TIMESERIES_DATA, payload: response });
    const latestTotalPayload = createLatestTotalPayload(
      response[0],
      response[1]
    );
    yield put({
      type: actionTypes.INSERT_LATEST_TOTAL_DATA,
      payload: latestTotalPayload
    });
  } catch (error) {
    yield put({ type: actionTypes.GET_TIMESERIES_DATA_ERROR, error });
  }
}

function* signupFlow(action) {
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

function* loginFlow(action) {
  console.log(action.payload.email, action.payload.password);

  try {
    const response = yield call(
      loginApi,
      action.payload.email,
      action.payload.password
    );
    console.log(response);
    yield put({ type: actionTypes.UPDATE_USER_DATA, payload: response });
    localStorage.setItem('userData', JSON.stringify(response));
    yield put({ type: actionTypes.LOGIN_SUCCESS });
  } catch (error) {
    yield put({ type: actionTypes.LOGIN_ERROR, error });
  }
}

function* logoutFlow() {
  const response = yield call(logoutApi);
  localStorage.removeItem('userData');
  yield put({ type: actionTypes.UPDATE_USER_DATA, payload: response });
  yield put({ type: actionTypes.INSERT_TIMESERIES_DATA, payload: response });
  yield put({ type: actionTypes.UPDATE_USER_DATA, payload: response });
  // navigate to login page
}

export default function* watchAllSaga() {
  yield takeLatest(actionTypes.GET_TIMESERIES_DATA, getTimeSeriesData);
  yield takeLatest(actionTypes.SIGNUP_REQUESTING, signupFlow);
  yield takeLatest(actionTypes.LOGIN_REQUESTING, loginFlow);
  yield takeLatest(actionTypes.LOGOUT_REQUESTING, logoutFlow);
}
