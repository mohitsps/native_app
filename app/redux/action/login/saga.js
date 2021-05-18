import React from 'react';
import {takeLatest, put, call} from 'redux-saga/effects';
import {
  Get_Login_Request,
  Get_Login_Success,
  Get_Login_Failure,
  Register_In_Request,
  Register_In_Success,
  Register_In_Failure,
  OTP_In_Request,
  OTP_In_Success,
  OTP_In_Failure,
} from '../../type';
import {
  userLogin,
  userRegister,
  registerOTP,
} from '../../../redux/service/auth-service';
import * as NavigationService from '../../navigationService';
import {storeData} from '../../../../app/service/Storage';



function* signupApi(action) {
  console.log('-----signupApi---->', action.data);
  let res = yield call(userRegister, action.data);
  console.log('--signupApi----res.data--->', res.data);
  if (res.data.status === 200) {
    yield put({type: Register_In_Success});
    alert(res.data.message);
    storeData('EMAIL', action.data.email);
    storeData('TOKEN', res.data.token);
    NavigationService.navigate('OTP');
  } else {
    yield put({type: Register_In_Failure});
    alert(res.data.message);
  }
}



function* mySaga() {
  yield takeLatest(Get_Login_Request, loginApi);
  yield takeLatest(Register_In_Request, signupApi);
  yield takeLatest(OTP_In_Request, otpApi);
}

export default mySaga;
