import {all} from 'redux-saga/effects';
import {watchGetProfile} from './Profile/Profile.Saga';
import {watchGetFollower} from './Follower/Follower.Saga';

export default function* rootSaga() {
  yield all([watchGetProfile(), watchGetFollower()]);
}
