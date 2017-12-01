import {combineReducers} from 'redux';

import trainsData from './trainsData.reducer';
import loading from './loading.reducer';
import errors from './errors.reducer';

const rootReducer = combineReducers({
  trainsData,
  loading,
  errors
});

export default rootReducer;
