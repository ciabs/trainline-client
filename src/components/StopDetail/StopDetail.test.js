import React from 'react';
import ReactDom from 'react-dom';
import {shallow, configure} from 'enzyme';
import renderer from 'react-test-renderer';
import StopDetail from './StopDetail';
import Adapter from 'enzyme-adapter-react-16';
import moment from 'moment';

configure({ adapter: new Adapter() });

describe('StopDetail', () => {
  const props = {
    stop: {
      arrival: {
        scheduled: {
          scheduledTime: moment([2017,11,11,20,20,20])
        }
      },
      departure: {
        scheduled: {
          scheduledTime: moment([2017,11,11,20,20,20])
        }
      },
      location: {
        crs: 'London'
      }
    },
    nextStop: {}
  };

  it('should not crash when mounted', () => {
    shallow(
      <StopDetail
        {...props}
      />
    );
  });

  it('should not crash when mounted', () => {
    const div = document.createElement('div');
    ReactDom.render(
      <StopDetail
        {...props}
      />,
      div
    );
  });

  it('should have a valid snapshot', () => {
    const component = renderer.create(
      <StopDetail
        {...props}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
