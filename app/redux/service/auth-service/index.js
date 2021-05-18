import React from 'react';
import {postJson, postJsonToken} from '../../../api/index';
import {Server_Url, login_Api, register_Api, otp_Api} from '../../../api/api';

export const userRegister = data => {
  return postJson(Server_Url + register_Api, data);
};
