import React from 'react';

import axios from 'axios';
import {getData} from '../../app/service/Storage';

const instance = axios.create();

export const getJson = URL => {
  return new Promise((reslove, reject) => {
    instance({
      method: 'GET',
      url: URL,
    })
      .then(res => {
        reslove(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const postJson = (URL, Param) => {
  console.log('---URL------->', URL);
  return new Promise((resolve, reject) => {
    instance({
      method: 'POST',
      url: URL,
      headers: {'x-api-key': '9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b'},
      data: Param,
    })
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const postJsonToken = (URL, Param = {}) => {
  return new Promise((resolve, reject) => {
    getData('TOKEN').then(value => {
      instance({
        method: 'POST',
        url: URL,
        headers: {token: value},
        data: Param,
      })
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  });
};
