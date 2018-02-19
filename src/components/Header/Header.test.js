import React from 'react';
import ReactDOM from 'react-dom';
import render from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Header from './Header';
import Adapter from 'enzyme-adapter-react-16';
import {Router, BrowserRouter} from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('Header', () => {
  it('should rendere without crashing', () => {
    shallow(<Header />);
  });

  it('should rendere without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    );
  });

  it('should have a valid snapshot', () => {
    const component = render.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
