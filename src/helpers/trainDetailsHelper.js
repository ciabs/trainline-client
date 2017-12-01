import moment from 'moment';

import config from '../config';

/* eslint-disable no-mixed-operators */
export const getTrainState = stop => {
  if (
    stop.departure &&
    stop.departure.realTime &&
    stop.departure.realTime.realTimeServiceInfo &&
    stop.departure.realTime.realTimeServiceInfo.realTimeFlag ==='Delayed' ||
    stop.departure && stop.departure.notApplicable &&
    stop.arrival &&
    stop.arrival.realTime &&
    stop.arrival.realTime.realTimeServiceInfo &&
    stop.arrival.realTime.realTimeServiceInfo.realTimeFlag ==='Delayed') {
    return 'Delayed';
  } else if (
    stop.departure &&
    stop.departure.realTime &&
    stop.departure.realTime.realTimeServiceInfo &&
    stop.departure.realTime.realTimeServiceInfo.realTimeFlag ==='Estimate' &&
    stop.departure.scheduled &&
    stop.departure.realTime.realTimeServiceInfo.realTime.toString() !== stop.departure.scheduled.scheduledTime.toString()
  ) {
    return `Exp. ${moment(stop.departure.realTime.realTimeServiceInfo.realTime).format('HH:mm')}`;
  } else if (
    stop.departure && stop.departure.notApplicable &&
    stop.arrival &&
    stop.arrival.realTime &&
    stop.arrival.realTime.realTimeServiceInfo &&
    stop.arrival.realTime.realTimeServiceInfo.realTimeFlag ==='Estimate' &&
    stop.arrival.realTime.realTimeServiceInfo.realTime.toString() !== stop.arrival.scheduled.scheduledTime.toString()
  ) {
    return `Exp. ${moment(stop.arrival.realTime.realTimeServiceInfo.realTime).format('HH:mm')}`;
  } else if (stop.arrival && !stop.arrival.notApplicable && stop.arrival.realTime && stop.arrival.realTime.cancelled) {
    return 'Cancelled';
  } else {
    return 'On time';
  }
};

export const getTrainPositon = stop => {
  if (stop.arrival && stop.arrival.notApplicable) {
    if (!stop.departure.realTime || !stop.departure.realTime.realTimeServiceInfo.hasDeparted) {
      return config.trainPosition.TRAIN;
    } else {
      return config.trainPosition.PASSED;
    }
  } else if (stop.departure && stop.departure.notApplicable) {
    if (stop.arrival.realTime && stop.arrival.realTime.realTimeServiceInfo.hasArrived) {
      return config.trainPosition.TRAIN;
    } else {
      return config.trainPosition.PASSED;
    }
  } else if (
    (stop.arrival && stop.arrival.realTime && stop.arrival.realTime.cancelled) ||
    stop.arrival && stop.arrival.realTime && !stop.arrival.realTime.realTimeServiceInfo.hasArrived && stop.departure && stop.departure.realTime && !stop.departure.realTime.realTimeServiceInfo.hasDeparted ||
    stop.arrival && stop.arrival.realTime && stop.arrival.realTime.realTimeServiceInfo.hasArrived && stop.departure && stop.departure.realTime && stop.departure.realTime.realTimeServiceInfo.hasDeparted
  ) {
    return config.trainPosition.EMPTY;
  } else if (stop.arrival && stop.arrival.realTime && stop.arrival.realTime.realTimeServiceInfo.hasArrived && stop.departure && stop.departure.realTime && !stop.departure.realTime.realTimeServiceInfo.hasDeparted) {
    return config.trainPosition.TRAIN;
  }
};

export const getTrainInTheMiddle = (stop, nextStop) => {
  let inTheMidle = false;
  if (
    nextStop &&
    stop.departure &&
    stop.departure.realTime &&
    !stop.departure.realTime.cancelled &&
    !nextStop.arrival.realTime.cancelled &&
    stop.departure.realTime.realTimeServiceInfo.hasDeparted &&
    !nextStop.arrival.realTime.realTimeServiceInfo.hasArrived
  ) {
    inTheMidle = true;
  }
  return inTheMidle;
};
/* eslint-enable no-mixed-operators */
