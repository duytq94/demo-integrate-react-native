import {call, put, takeLatest} from 'redux-saga/effects';
import {
  GET_PROFILE_REQUEST,
  getProfileFail,
  getProfileSuccess,
} from './Profile.Action';
import {getProfile} from '../api';
import {sendNetworkFail} from '../actions';

export function* watchGetProfile() {
  yield takeLatest(GET_PROFILE_REQUEST, handleGetProfile);
}

function* handleGetProfile(action) {
  const response = yield call(getProfile, action.payload);
  if (response.ok) {
    yield put(getProfileSuccess(response.data));
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getProfileFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getProfileFail(response.problem));
    }
  }
}
