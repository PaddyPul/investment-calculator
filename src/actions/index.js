import axios from 'axios';
import moment from 'moment';
export const FETCHBITCOIN = 'FETCHBITCOIN';
export const CALCULATETREASURE = 'CALCULATETREASURE';

const ROOT_URL = `https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD`;



export function fetchBitcoin(period, amount, type) {
  const days = period * 365
  const URL = `${ROOT_URL}&limit=${days}`
  const request =  axios.get(URL);
  return {
    type: FETCHBITCOIN,
    payload: request
  }
}

export function calculateTreasure(period, amount, type) {

  const values = [];
  const days = period * 365
  const initialAmount = amount

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
    payload: values
  }
}
