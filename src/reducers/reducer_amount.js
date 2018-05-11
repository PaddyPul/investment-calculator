import { GETAMOUNT } from '../actions/Types.js';


export default function(state = '', action) {
  switch (action.type) {
    case GETAMOUNT:
     return action.amount;
    default:
     return state;
  }
}
