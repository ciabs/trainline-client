import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import FontAwesome  from 'react-fontawesome';

import {
  Container, FirstCol, FourthCol, LinkStyled, Operator, SecondCol, ThirdCol,
  TrainStateStyled
} from './TrainListItem.styles';
import {getPlatform, getTrainState} from '../../helpers/trainsInfo.helper';

const TrainListItem = ({trainInfo, isTrainSelected}) => {
  const trainState = getTrainState(trainInfo);
  const platform = getPlatform(trainInfo);

  return (
    <Container isTrainSelected={isTrainSelected}>
      <LinkStyled to={`/trainDetails/${trainInfo.serviceIdentifier}`}>
        <FirstCol>
          <span>{moment(trainInfo.scheduledInfo.scheduledTime).format('HH:mm')}</span>
        </FirstCol>
        <SecondCol>
          <span>{trainInfo.destinationList[0].crs}</span>
          <Operator>{trainInfo.serviceOperator}</Operator>
        </SecondCol>
        <ThirdCol>
          <span>Plat. {platform}</span>
          <TrainStateStyled trainState={trainState.state}>{trainState.message}</TrainStateStyled>
        </ThirdCol>
        <FourthCol>
          <FontAwesome
            name='chevron-right'
          />
        </FourthCol>
      </LinkStyled>
    </Container>
  );
};

TrainListItem.propTypes = {
  trainInfo: PropTypes.object.isRequired,
  isTrainSelected: PropTypes.bool.isRequired
};

export default TrainListItem;
