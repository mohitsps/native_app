import React from 'react';
import {
  Get_Login_Request,
  Get_Login_Success,
  Get_Login_Failure,
  Register_In_Request,
  Register_In_Success,
  Register_In_Failure,
} from '../type';

const Initial_State = {
  hideProgress: false,
};

export const loginReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case Get_Login_Request:
      return {...state, hideProgress: true};
    case Get_Login_Success:
      return {...state, hideProgress: false};
    case Get_Login_Failure:
      return {...state, hideProgress: false};

    case Register_In_Request:
      return {...state, hideProgress: true};
    case Register_In_Success:
      return {...state, hideProgress: false};
    case Register_In_Failure:
      return {...state, hideProgress: false};
    default:
      return {...state};
  }
};

export default loginReducer;
