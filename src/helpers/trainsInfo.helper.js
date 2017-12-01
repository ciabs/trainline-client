import moment from 'moment';

import config from '../config';

export const getTrainState = trainInfo => {
  if (
    trainInfo.realTimeUpdatesInfo &&
    trainInfo.realTimeUpdatesInfo.realTimeServiceInfo &&
    trainInfo.realTimeUpdatesInfo.realTimeServiceInfo.realTimeFlag ==='Delayed') {
    return {
      message: 'Delayed',
      state: config.trainState.DELAYED
    };
  } else if (
    trainInfo.realTimeUpdatesInfo &&
    trainInfo.realTimeUpdatesInfo.realTimeServiceInfo &&
    trainInfo.realTimeUpdatesInfo.realTimeServiceInfo.realTimeFlag ==='Estimate' &&
    trainInfo.realTimeUpdatesInfo.realTimeServiceInfo.realTime.toString() !== trainInfo.scheduledInfo.scheduledTime.toString()
  ) {
    return {
      message: `Exp. ${moment(trainInfo.realTimeUpdatesInfo.realTimeServiceInfo.realTime).format('HH:mm')}`,
      state: config.trainState.EXPECTED
    };
  } else if (trainInfo.realTimeUpdatesInfo && trainInfo.realTimeUpdatesInfo.cancelled) {
    return {
      message: 'Cancelled',
      state: config.trainState.CANCELLED
    };
  } else {
    return {
      message: 'On time',
      state: config.trainState.ON_TIME
    };
  }
};

export const getPlatform = trainInfo => {
  if (trainInfo.realTimeUpdatesInfo && trainInfo.realTimeUpdatesInfo.realTimeServiceInfo && trainInfo.realTimeUpdatesInfo.realTimeServiceInfo.realTimePlatform) {
    return trainInfo.realTimeUpdatesInfo.realTimeServiceInfo.realTimePlatform;
  } else if (trainInfo.realTimeUpdatesInfo && trainInfo.realTimeUpdatesInfo.realTimeServiceInfo) {
    return '-';
  } else {
    return trainInfo.scheduledInfo.scheduledPlatform;
  }
};
