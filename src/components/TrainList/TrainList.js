import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Container} from './TrainList.styles';
import TrainListItem from '../TrainListItem/TrainListItem';
import {Spinner} from '../Shared/Spinner';
import {connect} from 'react-redux';
import {Error} from '../Shared/Error';

class TrainList extends Component {

  render() {
    const {trainsInfo, trainDetails, isHomePage, trainsInfoError} = this.props;

    if (Object.keys(trainsInfo.trains).length === 0) {
      return (
        <Container loading>
          <Spinner />
          {trainsInfoError && <Error />}
        </Container>
      );
    }

    return (
      <Container isHomePage={isHomePage}>
        {
          Object.values(trainsInfo.trains).map(train => (
            <TrainListItem
              key={train.serviceIdentifier}
              trainInfo={train}
              isTrainSelected={trainDetails.serviceUid === train.serviceIdentifier}
            />
          ))
        }
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  trainsInfo: state.trainsData.trainsInfo,
  trainDetails: state.trainsData.trainDetails,
  trainsInfoError: state.errors.trainsInfo
});

TrainList.propTypes = {
  trainsInfo: PropTypes.object.isRequired,
  trainDetails: PropTypes.object,
  isHomePage: PropTypes.bool.isRequired,
  trainsInfoError: PropTypes.bool
};

export default connect(mapStateToProps)(TrainList);
