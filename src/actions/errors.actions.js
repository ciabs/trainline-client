import * as ActionTypes from './types';

export const setGetTrainsInfoError = error => ({
  type: ActionTypes.SET_GET_TRAINS_INFO_ERROR,
  error
});

export const setGetTrainDetailsError = error => ({
  type: ActionTypes.SET_GET_TRAIN_DETAILS_ERROR,
  error
});
