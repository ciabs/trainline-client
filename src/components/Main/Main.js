import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FontAwesome  from 'react-fontawesome';
import moment from 'moment';

import {Container, InfoWrapper, SectionsWrapper, Title, Wrapper} from './Main.styles';
import TrainList from '../TrainList/TrainList';
import {Route} from 'react-router-dom';
import TrainDetails from '../TrainDetails/TrainDetails';
import {connect} from 'react-redux';
import colors from '../../styles/colors';

class Main extends Component {

  render() {
    const {trainsInfo, isHomePage} = this.props;

    const renderUpdateInfo = trainsInfo.timestamp ? (
      <span>Last update at {moment(trainsInfo.timestamp).format('HH:mm:ss ')}
        with {Object.keys(trainsInfo.trains).length} trains.</span>
    ) : (
      <FontAwesome
        style={{color: colors.color3}}
        name='circle-o-notch'
        spin
      />
    );

    return (
      <Container>
        <Wrapper>
          <Title>
            <FontAwesome
              name='clock-o'
            /> <span>Departures from London Waterloo</span>
          </Title>
          <h5>Powered by National Rail Enquires
            View live train status and departure information boards for all UK train stations with Trainline. Check live times and platform information before boarding.</h5>
          <InfoWrapper>
            {renderUpdateInfo}
          </InfoWrapper>
          <SectionsWrapper>
            <TrainList isHomePage={isHomePage}/>
            <Route
              path="/trainDetails/:trainId"
              component={TrainDetails}
            />
          </SectionsWrapper>
        </Wrapper>
      </Container>
    );
  }
}

Main.propTypes = {
  isHomePage: PropTypes.bool.isRequired,
  trainsInfo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  trainsInfo: state.trainsData.trainsInfo
});

export default connect(mapStateToProps)(Main);
