const config = {
  apiUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://still-caverns-47909.herokuapp.com',
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
