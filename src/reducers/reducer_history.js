import { FETCHBITCOIN, CALCULATETREASURE } from '../actions/index.js';

export default function(state = [], action) {
  switch (action.type) {

    case FETCHBITCOIN:
    console.log(action.payload.data.Data);
     return action.payload.data.Data;
    case CALCULATETREASURE:
     return action.payload
    default:
     return state;
  }
}
