import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import 'normalize.css';
import 'font-awesome/css/font-awesome.css';
import App from './App';
import configureStore from './store/config.store';
import DevTools from './components/DevTools/DevTools';

const customHistory = createBrowserHistory();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={customHistory}>
        <App />
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);
