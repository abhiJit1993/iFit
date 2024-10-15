import { combineReducers } from 'redux';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  app: appReducer // Add other reducers here as you expand
});

export default rootReducer;
