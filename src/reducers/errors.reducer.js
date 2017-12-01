import initialState from './initial.state';
import * as types from '../actions/types';

export default function trainsReducer(state = initialState.errors, action) {
  switch (action.type) {
    case types.SET_GET_TRAINS_INFO_ERROR:
      return Object.assign({}, state, {
        trainsInfo: action.error
      });
    case types.SET_GET_TRAIN_DETAILS_ERROR:
      return Object.assign({}, state, {
        trainDetails: action.error
      });
    default:
      return state;
  }
}
