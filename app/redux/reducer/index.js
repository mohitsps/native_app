import React from 'react';
import {combineReducers} from 'redux';
import loginReducer from './login_Reducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  loginReducer: loginReducer,
});

export default rootReducer;
