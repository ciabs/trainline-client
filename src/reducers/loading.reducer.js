import initialState from './initial.state';
import * as types from '../actions/types';

export default function loadingReducer(state = initialState.loading, action) {
  switch (action.type) {
    case types.SET_LOADING_SUCCESS:
      return {
        loading: action.isLoading
      };
    default:
      return state;
  }
}
