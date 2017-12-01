import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import FontAwesome  from 'react-fontawesome';

import {Circle, CircleMiddle, Container, LeftCell, Location, RightCell, TrainStateStyled} from './StopDetail.styles';
import config from '../../config';
import {getTrainInTheMiddle, getTrainPositon, getTrainState} from '../../helpers/trainDetailsHelper';

const StopDetail = ({stop, nextStop}) => {
  const time = stop.arrival && stop.arrival.scheduled ?
    moment(stop.arrival.scheduled.scheduledTime).format('HH:mm') :
    moment(stop.departure.scheduled.scheduledTime).format('HH:mm');

  const trainPosition = getTrainPositon(stop);
  const trainState = getTrainState(stop);
  const isLastStop = stop.departure && stop.departure.notApplicable;
  const inTheMidle = getTrainInTheMiddle(stop, nextStop);
  const isLocationPassed =
    stop.departure &&
    stop.departure.realTime &&
    stop.departure.realTime.realTimeServiceInfo &&
    stop.departure.realTime.realTimeServiceInfo.hasDeparted;


  const renderCircle = (
    <Circle trainPosition={trainPosition}>
      {
        trainPosition === config.trainPosition.TRAIN &&
        <FontAwesome
          name='train'
        />
      }
    </Circle>
  );

  const renderMiddleCircle = inTheMidle && (
    <CircleMiddle trainPosition={config.trainPosition.TRAIN}>
      <FontAwesome
        name='train'
      />
    </CircleMiddle>
  );

  return (
    <Container>
      <RightCell>
        {time}
      </RightCell>
      <LeftCell isLastStop={isLastStop}>
        {renderCircle}
        {renderMiddleCircle}
        <Location isPassed={isLocationPassed}>{stop.location.crs}</Location>
        <TrainStateStyled>{trainState}</TrainStateStyled>
      </LeftCell>
    </Container>
  );
};

StopDetail.propTypes = {
  stop: PropTypes.object.isRequired,
  nextStop: PropTypes.object
};

export default StopDetail;
