import trainsReducer from './errors.reducer';
import {SET_GET_TRAINS_INFO_ERROR} from '../actions/types';

describe('Reducers', () => {
  it('should return the initial state', () => {
    expect(trainsReducer(undefined, {}))
      .toEqual({
        trainsInfo: false,
        trainDetails: false
      });
  });

  it('should handle SET_GET_TRAINS_INFO_ERROR', () => {
    expect(trainsReducer(undefined,
      {
        type: SET_GET_TRAINS_INFO_ERROR,
        error: true
      }))
      .toEqual({
        trainsInfo: true,
        trainDetails: false
      });
  });
});
