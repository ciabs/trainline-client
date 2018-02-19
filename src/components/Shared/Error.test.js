import React from 'react';
import renderer from 'react-test-renderer';
import {Error} from './Error';
import ReactDOM from 'react-dom';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Error', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Error />,
      div
    );
  });

  it('should render without crashing when mounted with Enzyme', () => {
    shallow(<Error />);
  });

  it('should should have a valid snapshot', () => {
    const component = renderer.create(
      <Error />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
