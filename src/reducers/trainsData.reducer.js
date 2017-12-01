import initialState from './initial.state';
import * as types from '../actions/types';

export default function trainsReducer(state = initialState.trainsData, action) {
  switch (action.type) {
    case types.UPDATE_TRAINS_INFO:
      return Object.assign({}, state, {
        trainsInfo: action.trainsInfo
      });
    case types.UPDATE_TRAINS_DETAILS:
      return Object.assign({}, state, {
        trainDetails: action.trainDetails
      });
    default:
      return state;
  }
}
