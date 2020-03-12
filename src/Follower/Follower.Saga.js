import {call, put, takeLatest} from 'redux-saga/effects';
import {getFollower} from '../api';
import {
  GET_FOLLOWER_REQUEST,
  getFollowerFail,
  getFollowerSuccess,
} from './Follower.Action';
import {sendNetworkFail} from '../actions';

export function* watchGetFollower() {
  yield takeLatest(GET_FOLLOWER_REQUEST, handleGetFollower);
}

function* handleGetFollower(action) {
  const response = yield call(getFollower, action.payload);
  if (response.ok) {
    yield put(getFollowerSuccess(response.data));
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getFollowerFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getFollowerFail(response.problem));
    }
  }
}
