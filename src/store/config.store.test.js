import {createStore} from 'redux';

import rootReducer from '../reducers/index.reducer';
import initialState from '../reducers/initial.state';
import * as ActionTypes from '../actions/types';

describe('configureStore', () => {
  it('should get the correct loading.rates state when `SET_RATES_LOADING` action is dispatched', () => {
    const store = createStore(rootReducer, initialState);

    const action = { type: ActionTypes.SET_GET_TRAINS_INFO_ERROR, error: true};
    store.dispatch(action);

    const actualState = store.getState();
    expect(actualState.errors.trainsInfo).toBe(true);
  });
});
