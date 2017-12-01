import * as ActionTypes from './types';
import {getTrainDetailsFromApi, getTrainsInfoFromApi} from '../api/trains.api';
import {setLoading} from './loading.actions';
import {setGetTrainDetailsError, setGetTrainsInfoError} from './errors.actions';

export const updateTrainsInfoSuccess = trainsInfo => ({
  type: ActionTypes.UPDATE_TRAINS_INFO,
  trainsInfo
});

export const updateTrainDetailsSuccess = trainDetails => ({
  type: ActionTypes.UPDATE_TRAINS_DETAILS,
  trainDetails
});


export const updateTrainsInfo = trainsInfo => dispatch => {
  dispatch(setGetTrainsInfoError(false));
  return dispatch(updateTrainsInfoSuccess(trainsInfo));
};

export const updateTrainDetails = trainDetails => dispatch => {
  dispatch(setGetTrainDetailsError(false));
  return dispatch(updateTrainDetailsSuccess(trainDetails));
};

export const getTrainsInfo = () => dispatch => {
  return getTrainsInfoFromApi()
    .then(trainsInfo => {
      dispatch(setGetTrainsInfoError(false));
      return dispatch(updateTrainsInfoSuccess(trainsInfo));
    })
    .catch(error => {
      dispatch(setGetTrainsInfoError(true));
      console.error(error);
    });
};

export const getTrainDetails = serviceIdentifier => dispatch => {
  dispatch(setLoading(true));
  return getTrainDetailsFromApi(serviceIdentifier)
    .then(trainsInfo => {
      dispatch(setGetTrainDetailsError(false));
      dispatch(setLoading(false));
      return dispatch(updateTrainDetailsSuccess(trainsInfo));
    })
    .catch(error => {
      dispatch(setGetTrainDetailsError(true));
      dispatch(setLoading(false));
      console.error(error);
    });
};
