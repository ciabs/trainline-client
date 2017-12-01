import axios from 'axios';

import config from '../config';

export const getTrainsInfoFromApi = () =>
  axios
    .get(`${config.apiUrl}/trainsInfo`)
    .then(res => res.data);

export const getTrainDetailsFromApi = serviceIdentifier =>
  axios
    .get(`${config.apiUrl}/trainDetails/${serviceIdentifier}`)
    .then(res => res.data);
