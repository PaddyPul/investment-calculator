import * as actions from '../actions/Actions'
import * as types from '../actions/Types'
import moment from 'moment';
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

  it('should create an action to send an object CALCULATETREASURE', () => {
    const expectedAction = {
      type: types.CALCULATETREASURE,
    }
    expect(actions.calculateTreasure(1).type).toEqual(expectedAction.type)
  })

})
