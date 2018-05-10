import { FETCHBITCOIN, CALCULATETREASURE } from '../actions/index.js';

export default function(state = [], action) {
  switch (action.type) {
    case FETCHBITCOIN:
     return {
       data: action.payload.values.Data,
       type: action.payload.type,
       amount: action.payload.amount
     };
    case CALCULATETREASURE:
     return {
      data: action.payload.values,
      type: action.payload.type,
      amount: action.payload.amount
    };
    default:
     return state;
  }
}
