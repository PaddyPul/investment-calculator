import { GETPERIOD } from '../actions/index.js';


export default function(state = '', action) {
  switch (action.type) {
    case GETPERIOD:
     return action.period;
    default:
     return state;
  }
}
