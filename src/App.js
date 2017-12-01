import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {injectGlobal} from 'styled-components';

import config from './config';
import {getTrainDetails, getTrainsInfo, updateTrainDetails, updateTrainsInfo} from './actions/trainsData.actions';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import {GlobalStyled} from './styles/global';
import {withRouter} from 'react-router-dom';

const socket = socketIOClient(config.apiUrl);

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isHomePage: props.location.pathname === '/'
    };

    this.checkTrainDetailsPageAndGetDetails(props.location);
    this.setTrainDetailsPageListener();
  }

  componentDidMount() {
    this.props.getTrainsInfoFunc();
    this.socketListener();

    injectGlobal`${GlobalStyled()}`; // eslint-disable-line no-unused-expressions
  }

  setTrainDetailsPageListener = () => {
    this.props.history.listen(location => {
      this.setState({isHomePage: location.pathname === '/'});
      this.checkTrainDetailsPageAndGetDetails(location);
    });
  };

  checkTrainDetailsPageAndGetDetails = location => {
    if (location.pathname.includes('/trainDetails/')) {
      this.getTrainDetails(location.pathname.replace('/trainDetails/', ''));
    }
  };

  socketListener = () => {
    socket.on(config.infoType.TRAINS_INFO, data => {
      this.props.updateTrainsInfoFunc(data);
    });

    socket.on(config.infoType.TRAIN_DETAILS, data => {
      this.props.updateTrainDetailsFunc(data);
    });
  };

  getTrainDetails = serviceIdentifier => {
    this.props.getTrainDetailsFunc(serviceIdentifier);
    socket.emit(config.infoType.TRAIN_DETAILS, {serviceIdentifier});
  };

  render() {
    return (
      <div>
        <Header />
        <Main isHomePage={this.state.isHomePage} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => {
  return {
    getTrainsInfoFunc: bindActionCreators(getTrainsInfo, dispatch),
    getTrainDetailsFunc: bindActionCreators(getTrainDetails, dispatch),
    updateTrainsInfoFunc: bindActionCreators(updateTrainsInfo, dispatch),
    updateTrainDetailsFunc: bindActionCreators(updateTrainDetails, dispatch)
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
