import React from 'react';

export const checkEmail = text => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(text) === false) {
    console.log('Email is Not Correct');
    return false;
  } else {
    console.log('Email is Correct');
    return true;
  }
};
