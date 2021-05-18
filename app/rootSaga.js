import {all} from 'redux-saga/effects';
import LoginSaga from './redux/action/login/saga';

export default function* rootSaga() {
  yield all([LoginSaga()]);
}
