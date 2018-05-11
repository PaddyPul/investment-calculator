import * as actions from '../actions/Actions'
import * as types from '../actions/Types'
import moment from 'moment';
import configureStore from 'redux-mock-store'
import axios from 'axios';
import ReduxPromise from 'redux-promise';

describe('actions', () => {
  it('should create an action to send an amount', () => {
    const amount = '2000'
    const expectedAction = {
      type: types.GETAMOUNT,
      amount
    }
    expect(actions.getAmount(amount)).toEqual(expectedAction)
  }),

  it('should create an action to send a investment type', () => {
    const investment = 'Bitcoin'
    const expectedAction = {
      type: types.GETINVEST,
      investment
    }
    expect(actions.getInvest(investment)).toEqual(expectedAction)
  }),

  it('should create an action to send a period (years) of investment', () => {
    const period = '10'
    const expectedAction = {
      type: types.GETPERIOD,
      period
    }
    expect(actions.getPeriod(period)).toEqual(expectedAction)
  }),

  it('should create an action to send an object with treasure return in a specific period of years', () => {
    const values = [];
    const period = '1';
    var amount = 1;
    var time = moment().subtract(period, 'years'); //go back a period of years
    for (let x = 0; x <= 365; x++) { // generate data daily
      values[x] = {
        close: amount,
        time: time.unix()
      }
      time = time.add(1, 'day');
      amount = amount*1.000265;  // rate converted from 10%/year to daily
    }

    const expectedAction = {
      type: types.CALCULATETREASURE,
      payload: values
    }
    expect(actions.calculateTreasure(period)).toEqual(expectedAction)
  })
});
//
// const middlewares = [ReduxPromise]
// const mockStore = configureStore(middlewares)
//
// describe('async actions', () => {
//
//   it('gets bitcoin history data from cryptocurrency API', () => {
//     const initialState = {};
//     const store = mockStore(initialState);
//
//     const period = 1;
//     const days = period * 365
//     const ROOT_URL = `https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=BRL`;
//     const URL = `${ROOT_URL}&limit=${days}`;
//
//     var path=require('path');
//     var lib=path.join(path.dirname(require.resolve('axios')),'lib/adapters/http');
//     var http=require(lib);
//     const request = axios.get(URL, {adapter: http});
//
//     store.dispatch(actions.fetchBitcoin());
//     const expectedAction = {
//       type: types.FETCHBITCOIN,
//       payload: request
//     }
//     expect(actions.fetchBitcoin(period)).toEqual(expectedAction)
//   }),
//   it('gets an error while trying to get the cryptocompare api information', () => {
//     const initialState = {};
//     const store = mockStore(initialState);
//
//     const period = 1;
//     const days = period * 365
//     const ROOT_URL = `https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD`;
//     const URL = `${ROOT_URL}&limit=${days}`;
//
//     var path=require('path');
//     var lib=path.join(path.dirname(require.resolve('axios')),'lib/adapters/http');
//     var http=require(lib);
//     const request = axios.get(URL, {adapter: http});
//
//     store.dispatch(actions.fetchBitcoin(period));
//
//     const storeactions = store.getActions();
//     const expectedAction = {
//       type: types.FETCHBITCOIN,
//       payload: request
//     }
//     expect(storeactions).toEqual([expectedAction]);
//   })
// })
