import axios from 'axios';

import moment from 'moment';
import * as types from './Types';

// BITCOIN ACTIONS

function bitcoinSuccess(request) {
  return {
    type: types.FETCHBITCOIN,
    payload: request,
  }
}


function bitcoinError(error) {
  return {
    type: types.BITCOINERROR,
    error
  }
}

function getBitcoinfromAPI(period) {
  const days = period * 365;
  const ROOT_URL = `https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=BRL`;
  const URL = `${ROOT_URL}&limit=${days}`;
  const request =  axios.get(URL);
  return request;
}


export function fetchBitcoin(period) {
  return function (dispatch) {
    return getBitcoinfromAPI(period).then(
      data => dispatch(bitcoinSuccess(data)),
      error => dispatch(bitcoinError(error))
    );
  }
}

//TREASURE actions

export function calculateTreasure(period) {
  const values = [];
  const days = period * 364;
  var amount = 1;
  var time = moment().subtract(period, 'years'); //go back a period of years
  for (let x = 0; x <= days; x++) { // generate data daily
    values[x] = {
      close: amount,
      time: time.unix()
    }
    time = time.add(1, 'day');
    amount = amount*1.000265;  // rate converted from 10%/year to daily
  }
  return {
    type: types.CALCULATETREASURE,
    payload: values,
  }
}

// SIMPLE STATE actions

export function getAmount(amount) {
  return {
    type: types.GETAMOUNT,
    amount
  }
}


export function getPeriod(period) {
  return {
    type: types.GETPERIOD,
    period
  }
}


export function getInvest(investment) {
  return {
    type: types.GETINVEST,
    investment
  }
}
