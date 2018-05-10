import { combineReducers } from 'redux';
import HistoryReducer from './reducer_history';

const rootReducer = combineReducers({
  investment: HistoryReducer
});

export default rootReducer;
