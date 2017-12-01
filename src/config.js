const config = {
  apiUrl: 'http://localhost:8080',
  infoType: {
    TRAINS_INFO: 'trainsInfo',
    TRAIN_DETAILS: 'trainDetails'
  },
  trainState: {
    ON_TIME: 'ON_TIME',
    DELAYED: 'DELAYED',
    EXPECTED: 'EXPECTED',
    CANCELLED: 'CANCELLED',
  },
  trainPosition: {
    TRAIN: 'TRAIN',
    PASSED: 'PASSED',
    EMPTY: 'EMPTY',
  }
};

export default config;
