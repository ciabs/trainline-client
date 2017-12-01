import React, { Component } from 'react';
import {connect} from 'react-redux';
import FontAwesome  from 'react-fontawesome';

import {CloseButtonWrapper, Container, Station, StationsWrapper, TitleBar, TrainWrapper} from './TrainDetails.styles';
import StopDetail from '../StopDetail/StopDetail';
import {Spinner} from '../Shared/Spinner';
import {Error} from '../Shared/Error';

class TrainDetails extends Component {
  handleBackHome = () => {
    this.props.history.push('/');
  };

  render() {
    const {trainDetails, isLoading, trainDetailsError} = this.props;

    if (Object.keys(trainDetails).length === 0 || isLoading) {
      return (
        <Container loading>
          <Spinner />
          {trainDetailsError && <Error />}
        </Container>
      );
    }

    const renderStops = [];
    for (let i = 0; i < trainDetails.stops.length; i++) {
      const stop = trainDetails.stops[i];
      const nextStop = i !== trainDetails.stops.length - 1 ? trainDetails.stops[i + 1] : null;
      renderStops.push(
        <StopDetail
          key={`${stop.location.crs}${Math.random()}`}
          stop={stop}
          nextStop={nextStop}
        />
      );
    }

    const departure = trainDetails.stops[0].location.crs;
    const destination = trainDetails.stops[trainDetails.stops.length-1].location.crs;

    return (
      <Container>
        <TitleBar>
          <TrainWrapper>
            <FontAwesome
              name='train'
              size='2x'
            />
          </TrainWrapper>
          <CloseButtonWrapper onClick={this.handleBackHome}>
            <FontAwesome
              style={{cursor: 'pointer'}}
              name='times-circle-o'
              size='2x'
            />
          </CloseButtonWrapper>
          <StationsWrapper>
            <div>
              <Station>{departure}</Station> to <Station>{destination}</Station>
            </div>
          </StationsWrapper>
        </TitleBar>
        {renderStops}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.loading.loading,
  trainDetails: state.trainsData.trainDetails,
  trainDetailsError: state.errors.trainDetails
});

export default connect(mapStateToProps)(TrainDetails);
