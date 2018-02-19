import axios from 'axios';
import {getTrainsInfoFromApi} from './trains.api';

describe('Trains.api', () => {
  beforeAll(() => {
    axios.get = jest.fn().mockImplementation(() =>
      Promise.resolve({data: 'hello'})
    );
  });
  afterAll(() => {
    axios.get.mockReset();
  });

  describe('getTrainsInfoFromApi', () => {
    it('should get trains from api', () => {
      expect.assertions(1);

      return getTrainsInfoFromApi()
        .then(data => {
          expect(data).toBeDefined();
        });
    });
  });
});
