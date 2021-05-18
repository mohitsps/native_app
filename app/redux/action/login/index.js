import React from 'react';
import {
  Get_Login_Request,
  Register_In_Request,
  OTP_In_Request,
} from '../../type';



export const hitSignupApi = pars => {
  return {type: Register_In_Request, data: pars};
};

