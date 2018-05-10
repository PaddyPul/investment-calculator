import axios from 'axios';
import moment from 'moment';
export const FETCHBITCOIN = 'FETCHBITCOIN';
export const CALCULATETREASURE = 'TREASURE';
export const GETAMOUNT = 'GETAMOUNT';
export const GETPERIOD = 'GETPERIOD';
export const GETINVEST = 'GETINVEST';

const ROOT_URL = `https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=BRL`;


export function fetchBitcoin(period) {
  const days = period * 365
  const URL = `${ROOT_URL}&limit=${days}`
  const request =  axios.get(URL);
  return {
    type: FETCHBITCOIN,
    payload: request,
  }
}


export function calculateTreasure(period) {
  const values = [];
  const days = period * 365
  var amount = 1;
  var time = moment().subtract(period, 'years'); //go back a period of years
  for (let x = 0; x <= days; x++) {
    values[x] = {
      close: amount,
      time: time.unix()
    }
    time = time.add(1, 'day');
    amount = amount*1.000265;  // rate converted from 10%/year to daily
  }
  return {
    type: CALCULATETREASURE,
    payload: values,
  }
}


export function getAmount(amount) {
  return {
    type: GETAMOUNT,
    amount
  }
}


export function getPeriod(period) {
  return {
    type: GETPERIOD,
    period
  }
}


export function getInvest(investment) {
  return {
    type: GETINVEST,
    investment
  }
}
